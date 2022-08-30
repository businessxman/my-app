import { ActionType, getType } from 'typesafe-actions';
import * as authActions from '../auth/actions';
import * as cryptoActions from '../crypto/actions';

const initialState = {};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getType(authActions.axiosGetContentAction.request):
    case getType(authActions.axiosSetContentAction.request):
    case getType(cryptoActions.axiosGetContentAction.request):
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
