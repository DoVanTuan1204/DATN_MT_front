import appAxios from "../constant/axios-config";
import { v1 } from "../constant/version";

export const ORDER_ENDPOINT = {
  CREATE_ORDER: `${v1}/shop/hoa_don/create_order/`,
};

export default class OrderAPI {
  static createOrder = (payload) =>
    appAxios.post(ORDER_ENDPOINT.CREATE_ORDER, payload);
}
