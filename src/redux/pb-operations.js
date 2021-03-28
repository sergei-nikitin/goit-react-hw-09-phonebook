import axios from "axios";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  patchContactRequest,
  patchContactSuccess,
  patchContactError,
} from "./pb-actions";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error.message)));
};

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name: name,
    number: Number(number),
  };
  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))

    .catch((error) => dispatch(addContactError(error.message)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};

export const patchContact = (id, name, number) => (dispatch) => {
  const contact = {
    name: name,
    number: Number(number),
  };
  dispatch(patchContactRequest());

  axios
    .patch(`/contacts/${id}`, contact)
    .then(({ data }) => dispatch(patchContactSuccess(data)))
    .catch((error) => dispatch(patchContactError(error.message)));
};
