import appAxios from "../constant/axios-config";
import { v1 } from "../constant/version";

export const SEARCH_ENDPOINT = {
  SEARCH: (ten) => `${v1}/shop/sanpham/?ten=` + ten,
};

export default class SearchAPI {
  static Search = (payload) =>
    appAxios.get(SEARCH_ENDPOINT.SEARCH(payload), payload);
}
