import React from 'react'
import classes from './Bar.module.css'


export const Bar = (porps) => {
  return (
    <div className={classes.Bar}>
        <div className={classes.TotalPrice}>{porps.totalPrice}</div>
        <button className={classes.Button}>去支付</button>
    </div>
  )
}
