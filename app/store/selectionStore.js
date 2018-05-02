import { createStore } from "redux";

const initialState = {
  type: 0,
  dates: {},
  origin: "aaaa",
  destination: ""
};

export const selectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ASK_FOR_DELIVERY":
      return { ...state, type: action.payload };
    case "OFFER_DELIVERY":
      return { ...state, type: action.payload };
    case "RESET":
      return "";
    default:
      return state;
  }
};

export const getUserSelectionType = state => state.type;
export const getUserSelectionOrigin = state => state.origin;

let store = createStore(selectionsReducer);

export default store;
