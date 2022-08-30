import { GET_ERRORS } from "./types";

const initialState = {};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ERRORS:
      if (action.payload.error == '')
        return {};
      return action.payload;

    default:
      return state;
  }
}
