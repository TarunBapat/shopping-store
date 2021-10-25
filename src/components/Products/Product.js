import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Product.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../../store/index';
const Product=(props)=>{
	const {id,productName,productDesc}=props.item;
	const dispatch=useDispatch();
	const addToCartHandler=()=>{
		dispatch(cartSliceAction.addItem({id:id,productName:productName}))
	}

	return(
		<Card className={classes['product-card']}>
			<h1>{productName}</h1>
			<p>{productDesc}</p>
			<div className={classes.buttons}>
				<Button>View Detail</Button>
				<Button onClick={addToCartHandler}>Add to cart</Button>
			</div>
		</Card>
		)
}

export default Product;