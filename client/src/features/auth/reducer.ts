import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { ActionType, getType } from 'typesafe-actions';

import { ServerResponse } from './actions';
import * as authActions from './actions';
import setAuthToken from '../../utils/setAuthToken';
import { SET_CURRENT_USER, USER_LOADING } from './types';
export type AuthAction = ActionType<typeof authActions>

const isEmpty = require('is-empty');

export interface IState {
  isAuthenticated: boolean,
  user: any,
  loading?: boolean,
}

const initialState: IState = {
  isAuthenticated: false,
  user: {},
  loading: false
}

export const axiosGetUser =async (userData: any) => {
  const response = await axios
  .post('http://localhost:5000/api/user/login', userData);
  let  responseData : ServerResponse =  await response.data;

  return responseData;
}

export const axiosSetUser =async (userData: any) => {
  console.log(userData);
  await axios
    .post('http://localhost:5000/api/user/register', userData)
    .then(async res => {
      console.log('Registeration Success');
    });
}

export const reducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const token: string  = action.payload.token;
      setAuthToken(token);
      const decoded = jwt_decode(token);

      return {
        ...state,
        isAuthenticated: !isEmpty(decoded),
        user: decoded,
        loading: false
      };
    
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

    case getType(authActions.axiosSetContentAction.success):
      return initialState;

    case getType(authActions.logoutUser):
      localStorage.removeItem('jwtToken');
      return initialState;

    default:
      return state;
  }
}