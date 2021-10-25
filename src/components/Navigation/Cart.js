import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Cart=()=>{
	const items=useSelector((state)=>state.cart.items);

	return(
		<Card>
		{items.map((item)=>{
					return(
						<CartItem item={item}/>
						)
				})}

		{items.length>0?<Button>Checkout to payement</Button>:<h2>Add some items to cart</h2>}
		</Card>
		)
}

export default Cart;
