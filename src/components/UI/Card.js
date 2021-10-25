import React from 'react';
import classes from './Card.module.css'

const Card=(props)=>{
	let className=`${props.className} + ${classes.card}`
	return(
		<div className={className}>{props.children}</div>
		)
}

export default Card;