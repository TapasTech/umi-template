import { DependencyList, useCallback, useRef, useState, useEffect } from 'react';
import { usePersistFn } from 'ahooks';
import { FunctionReturningPromise, PromiseType } from './types';

function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const get = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return get;
}

export type AsyncState<T> =
  | {
      loading: boolean;
      error?: undefined;
      value?: undefined;
    }
  | {
      loading: true;
      error?: Error | undefined;
      value?: T;
    }
  | {
      loading: false;
      error: Error;
      value?: undefined;
    }
  | {
      loading: false;
      error?: undefined;
      value: T;
    };

type StateFromFunctionReturningPromise<T extends FunctionReturningPromise> = AsyncState<PromiseType<ReturnType<T>>>;

export type AsyncFnReturn<T extends FunctionReturningPromise = FunctionReturningPromise> = [
  StateFromFunctionReturningPromise<T>,
  T
];

export function useAsyncFn<T extends FunctionReturningPromise>(
  _fn: T,
  deps: DependencyList = [],
  initialState: StateFromFunctionReturningPromise<T> = { loading: false }
): AsyncFnReturn<T> {
  const lastCallId = useRef(0);
  const isMounted = useMountedState();
  const fn = usePersistFn(_fn);
  const [state, set] = useState<StateFromFunctionReturningPromise<T>>(initialState);

  const callback = useCallback((...args: Parameters<T>): ReturnType<T> => {
    const callId = ++lastCallId.current;
    set(prevState => ({ ...prevState, loading: true }));

    return fn(...args).then(
      value => {
        isMounted() && callId === lastCallId.current && set({ value, loading: false });

        return value;
      },
      error => {
        isMounted() && callId === lastCallId.current && set({ error, loading: false });
        return error;
      }
    ) as ReturnType<T>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, callback as unknown as T];
}
