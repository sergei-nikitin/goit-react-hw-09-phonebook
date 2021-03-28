import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
  patchContactSuccess,
} from "./pb-actions";

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [patchContactSuccess]: (state, { payload }) => [...state, payload],
});

const filter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
  [deleteContactSuccess]: (state, action) => (action.payload = ""),
});

export default combineReducers({
  contacts,
  filter,
});
