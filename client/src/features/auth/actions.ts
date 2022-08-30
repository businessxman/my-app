import { createAction, createAsyncAction } from 'typesafe-actions';
import * as actionTypes from './types';

export type User = { email: string, password: string };
export type RUser = {
  name: string
  email: string
  password: string 
  password2: string
  authority: Number
  checked: boolean
}
export type ServerResponse = { success: boolean, token: string };
export type ErrorResponse = { error: string };

export const axiosGetContentAction = createAsyncAction(
  actionTypes.USER_LOADING,
  actionTypes.SET_CURRENT_USER,
  actionTypes.GET_ERRORS,
)<User, ServerResponse, ErrorResponse>();

export const saveToLocalStorage = createAsyncAction(
  actionTypes.SAVE_TO_STORAGE_REQUEST,
  actionTypes.SAVE_TO_STORAGE_SUCCESS,
  actionTypes.GET_ERRORS
)<undefined, undefined, Error>();

export const axiosSetContentAction = createAsyncAction(
  actionTypes.USER_LOADING,
  actionTypes.REGISTER_SUCCESS,
  actionTypes.GET_ERRORS
)<RUser, undefined, Error>();

export const logoutUser = createAction(
  actionTypes.LOGOUT_USER
)();

// Set logged in user
export const setCurrentUser = (decoded: any) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};