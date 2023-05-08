import appAxios from '../constant/axios-config'
import { v1 } from '../constant/version'

export const AUTHENTICATE_ENDPOINT = {
  SIGN_IN: `${v1}/auth/token/`,
}

export default class AuthenticateAPI {
  static signIn = (payload) =>
    appAxios.post(AUTHENTICATE_ENDPOINT.SIGN_IN, payload)
}
