import * as types from "../constants";

function getRequest(payload) {
  return {
    type: types.GET_ITEMS_REQUEST,
    payload,
  };
}

function getSuccess(payload) {
  return {
    type: types.GET_ITEMS_SUCCESS,
    payload,
  };
}

function getFailure(payload) {
  return {
    type: types.GET_ITEMS_FAILURE,
    payload,
  };
}
function addRequest(payload) {
  return {
    type: types.ADD_ITEMS_REQUEST,
    payload,
  };
}

function addSuccess(payload) {
  return {
    type: types.ADD_ITEMS_SUCCESS,
    payload,
  };
}

function addFailure(payload) {
  return {
    type: types.ADD_ITEMS_FAILURE,
    payload,
  };
}

function deleteRequest(payload) {
  return {
    type: types.DELETE_ITEMS_REQUEST,
    payload,
  };
}

function deleteSuccess(payload) {
  return {
    type: types.DELETE_ITEMS_SUCCESS,
    payload,
  };
}

function deleteFailure(payload) {
  return {
    type: types.DELETE_ITEMS_FAILURE,
    payload,
  };
}

function updateRequest(payload) {
  return {
    type: types.UPDATE_ITEMS_REQUEST,
    payload,
  };
}

function updateSuccess(payload) {
  return {
    type: types.UPDATE_ITEMS_SUCCESS,
    payload,
  };
}

function updateFailure(payload) {
  return {
    type: types.UPDATE_ITEMS_FAILURE,
    payload,
  };
}

export {
  getRequest,
  getSuccess,
  getFailure,
  addRequest,
  addSuccess,
  addFailure,
  deleteRequest,
  deleteSuccess,
  deleteFailure,
  updateRequest,
  updateSuccess,
  updateFailure,
};
