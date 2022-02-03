import { createStore,combineReducers,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import photoReducer from '../store/reducers/photo';

const reducers = combineReducers({
  photo : photoReducer
});

const store = createStore(reducers, undefined, applyMiddleware(reduxThunk));

export default store;