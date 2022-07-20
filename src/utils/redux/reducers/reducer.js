/*
Fungsi reducer adalah sebuah function yang menerima 2 parameter, yaitu state dan action.
Fungsi ini tugasnya yaitu untuk merubah initial state menjadi state yang baru
*/

const initialState = {
    favorite: [],
    loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE" :
      return {
        ...state,
        favorite: action.payload,
      }
    case "START_LOADING" :
      return {
        ...state,
        loading: action.payload,
        }
    case "STOP_LOADING" :
      return {
        ...state,
        loading: action.payload,
        }
    default :
      return state;
    }
}
