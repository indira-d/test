
import React from 'react'
import { Link } from 'react-router-dom'
import LoginBtn from '../LoginBtn/LoginBtn'
import LogoutBtn from '../LoginBtn/LogoutBtn'
import './Menu.css'
import { useAuth0 } from '@auth0/auth0-react'


const Menu = () => {
	const {user, isAuthenticated} = useAuth0()
	return (
		<div className='menu'>
			<div style={{display:'flex'}}>
				<div style={{margin: '0 20px'}}><Link to='/' className='menuItem'> Transactions List</Link></div>
				<div style={{margin: '0 20px'}}><Link to='/add' className='menuItem'>Add Transaction</Link></div>
				
			</div>
			<div className='auth'>
				{
				isAuthenticated 
				? <div className='authItem' style={{display: 'flex'}}>
					<LogoutBtn /> 
					<div className='user'>user: {user.name}</div>
				  </div>
				: <div className='authItem'>
					<LoginBtn />
				 </div>
				}
			</div>
			
	
		</div>
	)
}

export default Menu