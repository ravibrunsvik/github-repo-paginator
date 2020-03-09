import {
  PAGE_DOWN,
  PAGE_UP,
  REFRESH,
  SET_LOADING,
  GET_DATA,
  TOGGLE_LIST,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case PAGE_UP:
      return {
        ...state,
        pageStart: state.pageStart + 20,
        pageEnd: state.pageEnd + 20,
        loading: false,
      };
    case PAGE_DOWN:
      return {
        ...state,
        pageStart: state.pageStart - 20,
        pageEnd: state.pageEnd - 20,
        loading: false,
      };

    case GET_DATA:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case REFRESH:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case TOGGLE_LIST:
      return {
        ...state,
        list: !state.list,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
