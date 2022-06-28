import React, { useEffect, useState } from 'react'
import classes from './FilterMeals.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


export const FilterMeals = (props) => {

    const [keyword,setKeyword] = useState('')

    useEffect(()=>{
        const timer = setTimeout(()=>{
            props.onFilter(keyword)
        },1000)
        return () => {
            clearTimeout(timer)
        }
    },[keyword])

    const inputChangeHandler = e => {
        setKeyword(e.target.value.trim());
        // props.onFilter(keyword)
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input 
                value={keyword}
                className={classes.SearchInput}
                onChange={inputChangeHandler}
                type="text" 
                placeholder={"請輸入關鍵字"} />
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
            </div>

        </div>
    )
}
