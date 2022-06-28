import React from 'react'
import Counter from '../../../UI/Counter/Counter'
import classes from './CheckoutItem.module.css'

export const CheckoutItem = (props) => {
  return (
    <div className={classes.CheckoutItem}>
        <div>
            <img className={classes.MealImg} src={props.meal.img} alt="burgers" />
        </div>
        <div className={classes.Desc}>
            <h2 className={classes.Title}>{props.meal.title}</h2>
            <div className={classes.PriceOuter}>
                <Counter meal={props.meal}/>
                <div className={classes.Price}>{props.meal.price * props.meal.amount}</div>
                               
            </div>
        </div>
    </div>
  )
}