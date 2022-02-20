import { combineReducers, createStore } from 'redux';
import { expenseReduce } from '../reducer/index.js';

const reducer = combineReducers({
    expenses: expenseReduce
})
const initialState = {}
export const store = createStore(reducer, initialState)

