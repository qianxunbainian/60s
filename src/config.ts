export const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT ? +process.env.PORT : 4399,
  wechat: '595941841',
  author: 'qianxun',
  guanwang: 'https://api.5k4.cn',
  debug: !!process.env.DEBUG,
  encodingParamName: process.env.ENCODING_PARAM_NAME || 'encoding',
}

export const COMMON_MSG = `获取成功，官网地址 ${config.guanwang}，作者微信 ${config.wechat}`
