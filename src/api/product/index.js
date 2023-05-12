import appAxios from "../constant/axios-config";
import { v1 } from "../constant/version";

export const PRODUCT_ENDPOINT = {
  GET_LIST_PRODUCT: `${v1}/shop/sanpham/`,
  GET_DETAIL_PRODUCT: (id) => `${v1}/shop/sanpham/` + id,
};

export default class ProductAPI {
  static getListProduct = (payload) =>
    appAxios.get(PRODUCT_ENDPOINT.GET_LIST_PRODUCT, payload);

  static getDetailProduct = (payload) =>
    appAxios.get(PRODUCT_ENDPOINT.GET_DETAIL_PRODUCT(payload), payload);
}
