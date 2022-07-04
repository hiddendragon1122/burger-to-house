import React from 'react';
import Meal from './Meal/Meal'
import classes from './Meals.module.css'

// 食物列表組件
const Meals = (props) => {
    return (
        /* 滾動條設置給Meals */
        <div className={classes.Meals}>
            {props.mealsData.map(item => 
            <Meal 
                key={item.id} 
                meal={item}
            />
            )}
        </div>
    );
};

export default Meals;