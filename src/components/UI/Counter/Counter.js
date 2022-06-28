import React, { useContext } from 'react'
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons"
import CartContext from '../../../store/cart-Context'

/* React 引入FontAwesome 
1.  npm i --save @fortawesome/fontawesome-svg-core
2. # Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
3. npm i --save @fortawesome/react-fontawesome@latest
*/

//計數器組件
const Counter = (props) => {
  //獲取CartContext
  const ctx = useContext(CartContext);

  //添加購物車的函數
  const addButtonHandler = () => {
    ctx.cartDispatch({type:'Add',meal:props.meal})
  }
  //刪除食物的函數
  const subButtonHandler = () => {
    ctx.cartDispatch({type:'REMOVE',meal:props.meal});
  }

  return (
    <div className={classes.Counter}>

    {
        (props.meal.amount && props.meal.amount !== 0) ?
        <>
        <button className={classes.Sub} onClick={subButtonHandler}>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button> 
        <span className={classes.count}>{props.meal.amount}</span>
        </> 
        : null
    }
        
        
        <button
          onClick={addButtonHandler}
           className={classes.Add}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
    </div>
  )
}

export default Counter;