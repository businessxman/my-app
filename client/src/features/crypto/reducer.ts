import axios from 'axios';
import { ActionType, getType } from 'typesafe-actions';
import * as crytoActions from './actions';
import { ServerResponse } from './actions';
import * as cryptoActions from './actions';

export type CryptoAction = ActionType<typeof crytoActions>;

export const axiosCreateCryptoUser =async (userData: any) => {
  const response = await axios
    .post('http://localhost:5000/api/crypto/register', userData)
  let  responseData : ServerResponse =  await response.data;

  return responseData;
}


export const reducer = (state: any, action: CryptoAction) => {
  switch(action.type) {
    case getType(cryptoActions.axiosGetContentAction.success):
      return {
        ...state,
        crypto: action.payload.data
      }
  }
}