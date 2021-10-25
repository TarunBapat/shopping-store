import { configureStore , createSlice} from '@reduxjs/toolkit';


const addProductSlice=createSlice({
	name:'AddProduct',
	initialState:{toggleProductInput:false},
	reducers:{
		toggle(state){
			state.toggleProductInput=!state.toggleProductInput;
		}
	}
})

const loginSlice=createSlice({
	name:'Login',
	initialState:{isLoggedIn:false},
	reducers:{
		loginToggle(state){
			state.isLoggedIn=!state.isLoggedIn;
		}
	}
})

const cartToggleSlice=createSlice({
	name:'Login',
	initialState:{cartState:false},
	reducers:{
		toggleCart(state){
			state.cartState=!state.cartState;
		}
	}
})


const cartSlice=createSlice({
	name:'Cart',
	initialState:{
		items:[],
		totalQuantity:0
	},
	reducers:{
		addItem(state,action){
			const newItem=action.payload;
			const existingItem=state.items.find((item)=>item.id===newItem.id);
			state.totalQuantity++;
			if(!existingItem){
				state.items.push(
				{
					id:newItem.id,
					quantity:1,
					name:newItem.productName
				}
				)
			}
			else{
				existingItem.quantity++

			}
			
		},
		removeItem(state,action){
			const id=action.payload;
			const existingItem=state.items.find((item)=>item.id===id);
			if(existingItem.quantity===1){
				state.items=state.items.filter((item)=>item.id!==id)
			}
			else{
				existingItem.quantity--;
			}
			state.totalQuantity--
		}
	}
})
const store=configureStore({
	reducer:{toggleProduct:addProductSlice.reducer,toggleLogin:loginSlice.reducer,cart:cartSlice.reducer,cartLogin:cartToggleSlice.reducer}
})

export default store;
export const toggleAction=addProductSlice.actions;
export const loginAction=loginSlice.actions;
export const cartLogin=cartToggleSlice.actions;
export const cartSliceAction=cartSlice.actions;