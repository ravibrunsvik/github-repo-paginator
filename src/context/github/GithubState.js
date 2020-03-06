import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import {
  SET_LOADING,
  PAGE_DOWN,
  PAGE_UP,
  REFRESH,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
} from "../types";

const GithubState = ({ children }) => {
  const initialState = {
    repos: null,
    pageStart: 0,
    pageEnd: 19,
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get data
  const getData = async () => {
    try {
      let data = await fetch(
        "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100"
      );

      let result = await data.json();
      dispatch({ type: GET_DATA_SUCCESS, payload: result.items });
    } catch (err) {
      console.error(err);
    }
  };
  // Refresh
  const refresh = async () => {
    let data = await getData();
    setLoading();
    dispatch({ type: REFRESH, payload: data });
  };
  // Page up
  const pageUp = () => {
    setLoading();
    dispatch({ type: PAGE_UP });
  };

  // Page down
  const pageDown = () => {
    setLoading();
    dispatch({ type: PAGE_DOWN });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getDataFailure = msg => {
    dispatch({ type: GET_DATA_FAILURE, payload: msg });
  };

  return (
    <GithubContext.Provider
      value={{
        repos: state.repos,
        pageStart: state.pageStart,
        pageEnd: state.pageEnd,
        loading: state.loading,
        pageUp,
        pageDown,
        getData,
        refresh,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
