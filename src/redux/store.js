import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import {reducer as testReducer} from '../redux/reducer'

const rootReducer=combineReducers({
    testReducer
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))