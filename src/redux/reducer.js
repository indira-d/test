import { ADD_TRANSACTION, DELETE_TRANSACTION } from './constants';

const initialState = {
		token: localStorage.userJWT, 
        email: localStorage.userEmail, 
        id: localStorage.userId, 
        surname: localStorage.surname,
		
	transactions: [
		{ id: 1, amount: 100, bankId: 1},
  		{ id: 2, amount: 200, bankId: 2},
	]
}
		
	


export default function reducer (state  =initialState, action){
	switch(action.type){
		case ADD_TRANSACTION:
			return {
			 	...state,
				transactions: [...state.transactions.concat(action.payload)]
			}
		case DELETE_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.filter(x => x.id != action.payload)
			}
		default:
			return state
	}
}
