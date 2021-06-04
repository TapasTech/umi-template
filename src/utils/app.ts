import { IInvalidInitState, IUser } from '@/interface';

export function isInvalidInitState(src: IInvalidInitState | IUser | undefined): src is IInvalidInitState {
  return src === undefined || src === 'LOGIN_REQUIRED';
}
