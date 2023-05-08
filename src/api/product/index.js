import appAxios from '../constant/axios-config'
import { v1 } from '../constant/version'

export const PRODUCT_ENDPOINT = {
  GET_LIST_PRODUCT: `${v1}/shop/sanpham/`,
}

export default class ProductAPI {
  static getListProduct = (payload) =>
    appAxios.get(PRODUCT_ENDPOINT.GET_LIST_PRODUCT, payload)
}
