import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/index.js";

//uso del local storage para almacenar los datos de redux
const initialList = () => {
  
 const list = localStorage.getItem('expense-list')
  let expenses = [];
  if(list){
    expenses = JSON.parse(list)
  }
  return expenses;
}



const initialState = {
  expenseList: initialList(),
  //estado para la barra de búsqueda
  query: ''
};

export const expenseReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      localStorage.setItem('expense-list', JSON.stringify([...state.expenseList, action.payload]))
      return {
        ...state,
        expenseList: [...state.expenseList, action.payload],
      };
    }
    case DELETE_EXPENSE: {
      const {payload} = action;
      const updateList = state.expenseList.filter(
        item => item.createAt !== payload.createAt
      );
      localStorage.setItem('expense-list', JSON.stringify(updateList))
      return{
        ...state,
        expenseList: updateList
      }
    }
    case SEARCH_EXPENSE: {
      const {query} = action;
      return{
        ...state,
        query
      }
    }
    default:
      return state;
  }
};
