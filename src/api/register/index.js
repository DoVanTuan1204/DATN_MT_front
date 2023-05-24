import appAxios from "../constant/axios-config";
import { v1 } from "../constant/version";

export const REGISTER_ENDPOINT = {
  REGISTER: `${v1}/shop/register/`,
};
export default class RegisterAPI {
  static Register = (payload) =>
    appAxios.post(REGISTER_ENDPOINT.REGISTER, payload);
}
