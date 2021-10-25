import React from 'react';
import classes from './Navigation.module.css';
import CartButton from './CartButton'
import { useSelector,useDispatch} from 'react-redux';
import {toggleAction,loginAction,cartLogin} from '../../store/index';
const Navigation=()=>{
	
	const dispatch=useDispatch();
	const toggleAddProductHandler=()=>{
		dispatch(toggleAction.toggle())
	}
	const logoutHandler=()=>{
		dispatch(loginAction.loginToggle())
	}
	const cartLoginHandler=()=>{
		dispatch(cartLogin.toggleCart())
	}
	return(
		<div className={classes.nav}>
		<div className={classes['nav-wrapper']}>
			<div className={classes['nav-logo']}><h1>Shopping Store</h1></div>
			<div className={classes['nav-menus']}>
				<ul>
					<li onClick={toggleAddProductHandler}>Add More Products</li>
					<li onClick={logoutHandler}>Logout</li>
					<li onClick={cartLoginHandler}><CartButton/></li>
				</ul>
			</div>
			</div>
		</div>
		)
}

export default Navigation;