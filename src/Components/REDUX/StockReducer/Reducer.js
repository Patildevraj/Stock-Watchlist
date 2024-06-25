import { StockReducer } from "./StockReducer";
import {combineReducers} from 'redux';

export const Reducer = combineReducers({
    StockData: StockReducer
})
