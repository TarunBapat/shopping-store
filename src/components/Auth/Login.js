import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.css';
import { useDispatch,useSelector } from 'react-redux';
import {loginAction} from '../../store/index';

const Login=(props)=>{
	const isLoggedIn=useSelector((state)=>state.toggleLogin.isLoggedIn)
	const dispatch=useDispatch();
	const [userName,setUserName]=useState('');
	const [password,setPassword]=useState('');
	const [validateUserName,setValidateUserName]=useState()

	const userNameHandler=(e)=>{
		setUserName(e.target.value);
	}
	const passwordHandler=(e)=>{
		setPassword(e.target.value);
	}
	const SubmitChangeHandler=(e)=>{
		e.preventDefault();
		dispatch(loginAction.loginToggle());
		console.log(userName,password);
		setUserName('');
		setPassword('');
	}
	return (
		<Card>
		<form action="">
			<div className={classes['login-text']}><h1>Login to your account</h1></div>
			<div className={classes.formContainer}>
				<label htmlFor="username"><span>Username</span>
				<input type="text" name="username" placeholder='Enter userName' value={userName} onChange={userNameHandler}  />
				</label>
			</div>
			
			<div className={classes.formContainer}>
				<label htmlFor="password"><span>Password</span>
				<input type="password" name="password" placeholder="Enter password" value={password} onChange={passwordHandler}  />
				</label>
			</div>
			<Button onClick={SubmitChangeHandler} >{isLoggedIn?'Create Account':'Login'}</Button>
		</form>
		</Card>
		)
}

export default Login;