import { useRef } from 'react';
import { dequal } from 'dequal';
import { useFirstMountState } from './use-first-mount-state';

export type Predicate<T> = (prev: T | undefined, next: T) => boolean;

// export const strictEquals = <T>(prev: T | undefined, next: T) => prev === next;

/**
 * @description 用来缓存数据 防止触发不必需要的render 或者 effects
 * @param value 缓存值
 * @param compare 比较函数默认 dequal 比较
 */
export function useCache<T>(value: T, compare: Predicate<T> = dequal): [T, boolean] {
  const cacheRef = useRef<T>(value);
  const mounted = useFirstMountState();
  let eq = true;
  if (!compare(cacheRef.current, value)) {
    cacheRef.current = value;
    if (!mounted) {
      eq = false;
    }
  }

  return [cacheRef.current, eq];
}
