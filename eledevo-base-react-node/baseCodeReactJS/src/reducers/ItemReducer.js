import * as types from "../constants";

const DEFAULT_STATE = {
  listItem: [],
  isFetching: false,
  dataFetched: false,
  error: false,
  errorMessage: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_ITEMS_REQUEST:
    case types.ADD_ITEMS_REQUEST:
    case types.UPDATE_ITEMS_REQUEST:
    case types.DELETE_ITEMS_REQUEST:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
        error: false,
        errorMessage: null,
      };


    case types.ADD_ITEMS_SUCCESS:
    case types.DELETE_ITEMS_SUCCESS:
    case types.UPDATE_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
 
      case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched : true,
        error : false,
        listItem : action.payload.listData
      };

    case types.GET_ITEMS_FAILURE:
    case types.ADD_ITEMS_FAILURE:
    case types.DELETE_ITEMS_FAILURE:
    case types.UPDATE_ITEMS_FAILURE:
    
      return {
        ...state,
        isFetching: false,
        dataFetched: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
