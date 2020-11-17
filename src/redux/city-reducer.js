import { cityAPI } from "../api/api";
import {
  SET_CITY,
  UPDATE_CITY,
  DELETE_CARD,
  TOGGLE_IS_UPDATE,
} from "../constans";

let initialState = {
  city: [],
  isUpdate: false,
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: [...state.city, action.payload],
      };
    case UPDATE_CITY:
      return {
        ...state,
        city: state.city.filter((card) => {
          if (card.id === action.payload.id) {
            return [action.payload];
          }
          return [state.city, action.payload];
        }),
      };
    case TOGGLE_IS_UPDATE:
      return {
        ...state,
        isUpdate: action.payload,
      };
    case DELETE_CARD:
      return {
        ...state,
        city: state.city.filter((card) => card.id !== action.payload),
      };
    default:
      return state;
  }
};

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});
export const onDeleteCard = (payload) => ({
  type: DELETE_CARD,
  payload,
});
export const updateCity = (payload) => ({
  type: UPDATE_CITY,
  payload,
});
export const toggleIsUpdate = (payload) => ({
  type: TOGGLE_IS_UPDATE,
  payload,
});

export const getCity = (city) => async (dispatch) => {
  let response = await cityAPI.getCity(city);

  let cityJSON = JSON.parse(localStorage.getItem("reduxState"));
  if (cityJSON.cityPage.city == 0) {
    dispatch(setCity(response.data));
  } else {
    let id;
    id = cityJSON.cityPage.city.map((id) => id.id);
    if (id.indexOf(response.data.id) === -1) {
      dispatch(setCity(response.data));
    } else {
      return false;
    }
  }
};
export const getUpdateCity = (id) => async (dispatch) => {
  // dispatch(toggleIsUpdate(true));
  let response = await cityAPI.getCityId(id); 
  dispatch(updateCity(response.data));
  // dispatch(toggleIsUpdate(false));
};
