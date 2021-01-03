import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import BaiTapGameXucXacReducer from './reducers/BaiTapGameXucXacReducer';

// key cartReducer: dat sao dat
const rootReducer = combineReducers({
    // cartReducer: cartReducer
    cartReducer,
    BaiTapGameXucXacReducer,
});

const store = createStore(
    rootReducer,
    // setup cho redux dev tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;