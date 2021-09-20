import React, {useState, useEffect} from 'react'
import Menu from '../Menu/Menu'
import { useDispatch } from 'react-redux'
import { addTransaction} from '../../redux/actions';
import './AddTransaction.css'

const AddTransaction = () => {
	
	const [amount, setamount] = useState('')
	const [bankId, setbankId] = useState(1)
    const dispatch = useDispatch()

	const handleChange = (e) => {
		e.preventDefault()
		if(amount ){
			 dispatch(addTransaction(amount, bankId))	 
			 setamount('')
			 setbankId(1)
			 alert('Transaction was added')
		}else{
			alert('fill all fields') 
		}		 
	 }
	
	return (
		<div>
			<Menu />
			<form className='form'>
				<h3>Наименование банка</h3>
				<select  onChange={e => setbankId( e.target.value)}>
					<option value={1} selected>World Bank</option>
					<option value={2}>EBRR</option>
					<option value={3}>EBRD</option>
					<option value={4}>National Bank</option>
					<option value={5}>International Bank</option>
				</select>
				<h3>Сумма транзакции</h3>
				<input
					className='amount'
					type='number'
					placeholder='transaction amount'
					value={amount}
					onChange={(e) => setamount(e.target.value)}
				/>
				<button onClick={handleChange} className='add-btn'>
					Add Transaction
				</button>
			</form>
		</div>
	)
}

export default AddTransaction
