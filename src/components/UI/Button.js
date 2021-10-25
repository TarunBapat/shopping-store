import React from 'react';
import classes from './Button.module.css'

const Button=(props)=>{
	let className=`${props.className} + ${classes.btn}`;
	return(
		<button className={className} type="button" onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
		)
}

export default Button;