export const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT ? +process.env.PORT : 4399,
  wechat: 'qxbn22',
  author: 'Viki <hi@viki.moe>',
  blog: 'https://api.5k4.cn',
  debug: !!process.env.DEBUG,
  encodingParamName: process.env.ENCODING_PARAM_NAME || 'encoding',
}

export const COMMON_MSG = `获取成功，官网 ${config.blog}，开发者微信 ${config.wechat}`
