import React, { useContext, useState , useEffect} from 'react'
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cart-Context'
import { CartDetails } from './CartDetails.js/CartDetails'
import { Checkout } from './Checkout/Checkout'

export const Cart = () => {
  const ctx = useContext(CartContext)

  //添加一個state來設置詳情是否顯示
  const [showDetails, setShowDetails] = useState(false)
  //state設置結賬頁
  const [showCheckout, setShowCheckout] = useState(false)

  //在組件每次重新渲染的時候，檢查一下商品的總數，若為0 ， 則showDetails改false
   useEffect(()=> {
    if(ctx.totalAmount === 0){
      //購物車被清空,相關窗口關閉
      setShowDetails(false)
      setShowCheckout(false)
    }
   },[ctx,setShowDetails,setShowCheckout])



  //添加一個顯示詳情頁的函數
  const toggleDetailsHandler = () => {
    if(ctx.totalAmount === 0){
      setShowDetails(false)
      return
    }
    setShowDetails(prevState => !prevState)
  }
  const showCheckoutHandler = () => {
    if(ctx.totalAmount === 0)return 
    setShowCheckout(true)
  }

  const hideCheckoutHandler = () => {
    setShowCheckout(false)
  }

  return (
    <div>
      <div className={classes.Cart} onClick={toggleDetailsHandler}>
        {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}
        {showDetails && <CartDetails/>}
        <div className={classes.Icon}>
          <img src={iconImg} alt={"bag"} />
          {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
          }
        </div>

        {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未選購商品</p> : 
          <p className={classes.Price}>{ctx.totalPrice}</p>
        }

        <button 
          onClick={showCheckoutHandler} 
          className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>確認訂單</button>
      </div>
    </div>
  )
}
