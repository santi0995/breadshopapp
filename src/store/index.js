import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoryReducer, productReducer } from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
