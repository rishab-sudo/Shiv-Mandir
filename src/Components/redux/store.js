import { createStore } from 'redux';

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const store = createStore(formReducer);

export default store;