import React,{ useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddProduct.module.css';

const AddProduct=(props)=>{
	const [product,setProduct]=useState('');
	const [value,setValue]=useState('All')
	const [desc,setDesc]=useState('');

	const ProductNameHandler=(e)=>{
		setProduct(e.target.value);
	}
	const ProductDescHandler=(e)=>{
		setDesc(e.target.value);
	}
	const selectChangeHandler=(e)=>{
		setValue(e.target.value);
	}
	const SubmitChangeHandler=(e)=>{
		e.preventDefault();
		props.onAddData(product,desc);
		setDesc('');
		setProduct('');
	}
	return (
		<Card>
		<form action="">
			<div className={classes.addproducts}><h1>Add Products</h1></div>
			<div className={classes.formContainer}>
				<label htmlFor="product-name"><span>Product Name</span>
				<input type="text" name="product-name" placeholder='Enter Product Name' value={product} onChange={ProductNameHandler}  />
				</label>
			</div>
			<div className={classes.formContainer}>
				<label htmlFor="product-name"><span>Product Category</span>
				<select name="" id="" value={value} onChange={selectChangeHandler}>
					<option value="All">All</option>
					<option value="Grocery">Grocery</option>
					<option value="Clothing">Clothing</option>
					<option value="Sports">Sports</option>
				</select>
				</label>
			</div>
			<div className={classes.formContainer}>
				<label htmlFor="product-name"><span>Product Description</span>
				<input type="text" name="product-name" placeholder="Enter product Description" value={desc} onChange={ProductDescHandler}  />
				</label>
			</div>
			<Button onClick={SubmitChangeHandler}>ADD PRODUCT</Button>
		</form>
		</Card>
		)
}

export default AddProduct;