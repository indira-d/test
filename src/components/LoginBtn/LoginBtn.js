import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Login.css'

const LoginBtn = () => {

	const {loginWithRedirect} = useAuth0()
	return (
		<button onClick={() => loginWithRedirect()} className='login'>
			Log In
		</button>
	)
}

export default LoginBtn
