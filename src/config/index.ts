export const IS_LOCAL = APP_ENV === 'local';
export const IS_STAGE = APP_ENV === 'stage';
export const IS_PROD = APP_ENV === 'prod';

/**
 * 所有的 *_PLACEHOLDER__，在npm run serve启动时，都需要指定运行时需要的值
 * 这个在“Use docker for release”时非常好用，可以针对不同的运行环境使用同一个镜像，指定不同的环境变量
 */

export const STORAGE_DOMAIN = IS_LOCAL ? window.location.hostname : 'STORAGE_DOMAIN_PLACEHOLDER__';

export const API_HOST = IS_LOCAL ? '' : 'API_HOST_PLACEHOLDER__';
