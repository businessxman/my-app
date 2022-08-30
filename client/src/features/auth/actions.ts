import { createAction, createAsyncAction } from 'typesafe-actions';
import { ErrorResponse } from '../error/actions';
import * as actionTypes from './types';
import { GET_ERRORS } from '../types';

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

export const axiosGetContentAction = createAsyncAction(
  actionTypes.LOGIN_REQUEST,
  actionTypes.LOGIN_SUCCESS,
  GET_ERRORS,
)<User, ServerResponse, ErrorResponse>();

export const saveToLocalStorage = createAsyncAction(
  actionTypes.SAVE_TO_STORAGE_REQUEST,
  actionTypes.SAVE_TO_STORAGE_SUCCESS,
  GET_ERRORS
)<undefined, undefined, Error>();

export const axiosSetContentAction = createAsyncAction(
  actionTypes.REGISTER_REQUEST,
  actionTypes.REGISTER_SUCCESS,
  GET_ERRORS
)<RUser, undefined, Error>();

export const logoutUser = createAction(
  actionTypes.LOGOUT_USER
)();
