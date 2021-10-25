import React from 'react';
import Product from './Product';
import classes from './ProductList.module.css';



const ProductList=(props)=>{
	return(
		<>
		
		<div className={classes.productListContainer}>
		{props.data.map((item)=>{
					return(
						<Product item={item}/>
						)
				})}
		</div>
		</>
		)
}

export default ProductList;