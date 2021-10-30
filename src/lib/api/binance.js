import { client } from './client'

/**
 * Binance API Wrapper
 *
 * @author Jayce Dugan
 * @date 9/08/2021
 * @link https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#general-api-information
 */
export default class Binance {
  constructor(config) {
    this.apikey = config.keys.api ?? ''
    this.secretKey = config.keys.secret ?? ''
    this.baseEndpoint = 'https://api.binance.com'
    this.primaryFallbackEndpoint = 'https://api1.binance.com'
    this.secondaryFallbackEndpoint = 'https://api1.binance.com'
    this.tertiaryFallbackEndpoint = 'https://api1.binance.com'
    this.requestDefaults = {
      headers: {
        'X-MBX-API-KEY': this.apikey
      }
    }

    this.endpoints = {
      systemStatus: this.baseEndpoint.concat('/sapi/v1/system/status')
    }
  }

  checkSystemStatus() {
    return new Promise((resolve, reject) => {
      return client.get(this.endpoints.systemStatus)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  }
}




