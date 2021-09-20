
import Menu from '../Menu/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTransaction } from '../../redux/actions'
import './AllTransactions.css'
import icon from '../../assets/icons8-delete-64.png'

const AllTransactions = () => {
	const transactionsList = useSelector(state => state.transactions.transactions)
	const dispatch = useDispatch()
	
	const banks = ['World Bank', 'EBRR', 'EBRD', 'National Bank', 'International Bank' ]
	
	return (
		<div>
			<Menu />
			{     
				transactionsList.map(el => (
					<div key={el.id} style={{display: 'flex'}} className='item'>
						<div>Bank: { banks.find((x, index)  => (index +1) == el.bankId)}</div>
						<div>Transaction amount: <strong>${el.amount}</strong></div>
						<button onClick={() => dispatch(deleteTransaction(el.id))} className='btn'>
							<img src={icon} className='btn-img' />
						</button>
					</div>		
				))
			}
		</div>
	)
}

export default AllTransactions