import {
  PAGE_DOWN,
  PAGE_UP,
  REFRESH,
  SET_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
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

    case GET_DATA_SUCCESS:
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

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
