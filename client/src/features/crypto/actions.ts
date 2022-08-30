import { createAsyncAction } from "typesafe-actions";
import { ErrorResponse } from "../error/actions";
import { GET_ERRORS } from "../types";
import * as actionTypes from './types';

export type userData = {
  user_id: string
  name: string
  app_name: string
  email: string
  phone: string
  checked: boolean
}

export type ServerResponse = {
  success: boolean
  data: any
}

export const axiosGetContentAction = createAsyncAction(
  actionTypes.CRYPTO_USER_REQUEST,
  actionTypes.CRYPTO_USER_SUCCESS,
  GET_ERRORS
)<userData, ServerResponse, ErrorResponse>();
