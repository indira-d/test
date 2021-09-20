import { ADD_TRANSACTION, DELETE_TRANSACTION } from './constants'


export const addTransaction = (amount, bankId ) => (dispatch, getState) => {
	dispatch({
		type: ADD_TRANSACTION,
			payload: {
				id: Date.now(),
				amount,
				bankId
			}
		})	
	}

export const deleteTransaction = (id) => (dispatch, getState) => {
	dispatch({
		type: DELETE_TRANSACTION,
		payload: id
	})
}