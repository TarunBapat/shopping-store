import classes from './CartButton.module.css';
import {useSelector} from 'react-redux';

const CartButton = (props) => {
  const totalQuantity=useSelector((state)=>state.cart.totalQuantity)
  const toggleHandler=()=>{
    
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
