import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/index.js"

//Agregar
export const addExpense = (payload) => {
    console.log('soy add-exp', payload)
    return {
        type: ADD_EXPENSE,
        payload
    }
};

//Borrar
export const deleteExpense = (payload) => {
    return {
        type: DELETE_EXPENSE,
        payload
    }
};

//Busqueda
export const searchExpense = (query) => {
    return {
        type: SEARCH_EXPENSE,
        query
    }
}