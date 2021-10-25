import React,{useState} from 'react';
import Button from '../UI/Button';
import classes from './SearchBar.module.css';
const SearchBar=(props)=>{

	const [searchInput,setSearchInput]=useState('');
	const searchInputHandler=(e)=>{
		e.preventDefault();
		setSearchInput(e.target.value);
	}
	const searchButton=()=>{
		props.onSearch(searchInput)
	}
	return(
		<form action="" className={classes.searchInputContainer}>
			<input type="text" value={searchInput} onChange={searchInputHandler} placeholder='Search ......'/>
			<Button onClick={searchButton}>Search</Button>
		</form>
		)
}

export default SearchBar;