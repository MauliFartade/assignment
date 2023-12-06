import axios from "axios";
import * as types from "./actionType";

// Action to fetch news
export const getNews = (dispatch) => {
  dispatch({ type: types.GET_REQUEST_NEWS });
  return axios
    .get(
      'https://newsapi.org/'
    )
    .then((res) => {
      return dispatch({ type: types.GET_SUCCESS_NEWS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_FAIL_NEWS });
    });
};

// Action to change count (not sure about its use in the context provided)
export const changecount = (dispatch) => {
  dispatch({ type: types.GET_SUCCESS_TOGGLE });
};

// Action to add to favorites
export const addedtofav = (data) => (dispatch) => {
  dispatch({ type: types.GET_SUCCESS_FAV, payload: data });
};
