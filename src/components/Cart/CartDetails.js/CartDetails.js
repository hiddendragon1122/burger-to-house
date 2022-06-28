import React,{useContext, useState} from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-Context'
import Meal from '../../Meal/Meal'
import { Confirm } from '../../UI/Confirm/Confirm'

export const CartDetails = () => {

    const ctx = useContext(CartContext)

    //state控制確認框的顯示
    const [showConfirm, setShowConfirm] = useState(false)

    //添加函數確認 顯示確認窗口
    const showConfirmHandler = () => {
        setShowConfirm(true)
    }

    const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }
    const okHandler = () => {
        ctx.cartDispatch({type:'CLEAR'})
    }

  return (
    <Backdrop>

        {showConfirm && <Confirm 
            onCancel={cancelHandler}
            onOk={okHandler}
            confirmText={'確認清空購物車？'}/>}

        <div 
            className={classes.CartDetails} 
            onClick={e => e.stopPropagation()}
        >
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品詳情</h2>
                <div 
                    onClick={showConfirmHandler}
                    className={classes.Clear}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span>清空購物車</span>
                </div>
            </header>

            <div className={classes.MealList}>
                {
                    ctx.items.map(item => 
                        <Meal noDesc key={item.id} meal={item}></Meal>
                    )
                }
            </div>
        </div>
    </Backdrop>
  )
}
