import appAxios from "../constant/axios-config";
import { v1 } from "../constant/version";

export const PROFILE_ENDPOINT = {
  GET_PROFILE: `${v1}/shop/profile`,
};
export default class ProfileAPI {
  static GetProfile = (payload) =>
    appAxios.get(PROFILE_ENDPOINT.GET_PROFILE, payload);
}
