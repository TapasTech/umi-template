declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// google analytics interface
interface GAFieldsObject {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
}

interface Window {
  ga: (command: 'send', hitType: 'event' | 'pageview', fieldsObject: GAFieldsObject | string) => void;
  reloadAuthorized: () => void;
}

declare const APP_ENV: string;

declare let ga: Function;

declare const REACT_APP_ENV: 'local' | 'staging' | 'production';

interface ListMeta {
  current: number;
  totalPages: number;
  pageSize: number;
  total: number;
}

interface MetaQ {
  per?: number | 10;
  page?: number | 1;
}

interface BaseResponse<T> {
  data?: T;
  error?: string;
  meta?: ListMeta;
}

type PromiseApiRes<T = any> = Promise<BaseResponse<T>>;
