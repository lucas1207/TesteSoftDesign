import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
 renderDetails: false,
 detailInfo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setRenderDetails':
      return { ...state, renderDetails: action.value };
    case 'setDetailInfo':
      return { ...state, detailInfo: action.value };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;
