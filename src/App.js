import React, { useState } from 'react';
import Meals from "./components/Meals/Meals";
import CartContext from './store/cart-Context';
import { FilterMeals } from './components/FilterMeals/FilterMeals';
import { Cart } from './components/Cart/Cart';


// 模擬食物數據
const MEALS_DATA = [
    {
        id: '1',
        title: '經典漢寶',
        desc: '百分百純牛肉配搭爽脆酸瓜洋蔥粒與美味番茄醬經典滋味讓你無法抵擋！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: '雙層芝士孖寶',
        desc: '百分百純牛肉與雙層香軟芝，加上鬆軟麵包及美味醬料，誘惑無人能擋！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: '巨無霸',
        desc: '兩塊百分百純牛肉，搭配生菜、洋蔥等新鮮食材，口感豐富，極緻美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '4',
        title: '脆辣雞腿寶',
        desc: '金黃脆辣的外皮，鮮嫩幼滑的雞腿肉，多重滋味，一次打動您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '5',
        title: '板燒雞腿寶',
        desc: '原塊去骨雞排嫩滑多汁，與翠綠新鮮的生菜和香濃燒雞醬搭配，口感豐富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '6',
        title: '麥香雞寶',
        desc: '清脆爽口的生菜，金黃酥脆的雞肉。營養配搭，好滋味的健康選擇！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '7',
        title: '芝士寶',
        desc: '百分百純牛肉與香軟芝士融為一體配合美味番茄醬豐富口感一咬即刻湧現！',
        price: 12,
        img: '/img/meals/7.png'
    }
];

const App = () => {

    // state儲存食物列表
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    //state儲存購物車數據 1.商品[] 2.總數totalAmount 3.總價totalPrice
    const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    })

    //創建一個過濾meals的函數
    const filterHandler = (keyword) => {
        const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1)
        setMealsData(newMealsData);
    }   

    //向購物車添加
    const addItem = (meal) => {
        //對購物車進行淺複製
        const newCart = { ...cartData };

        //判斷購物車中是否已經有同樣商品
        if (newCart.items.indexOf(meal) === -1) {
            newCart.items.push(meal);
            meal.amount = 1;
        } else {
            meal.amount += 1;
        }

        //增加總數
        newCart.totalAmount += 1;
        //增加總金額
        newCart.totalPrice += meal.price;

        //重新設置購物車
        setCartData(newCart);
    }

    //減少商品數量
    const removeItem = (meal) => {
        const newCart = { ...cartData }
        meal.amount -= 1;
        //檢查數量是否歸零
        if (meal.amount === 0) {
            //從車中移除該商品
            newCart.items.splice(newCart.items.indexOf(meal), 1)
        }

        //修改   總數 和 總金額
        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price;

        setCartData(newCart)
    }

    const clearCart = () => {
        const newCart = {...cartData}
        newCart.items.forEach(item => delete item.amount)
        newCart.items = []
        newCart.totalAmount = 0
        newCart.totalPrice = 0
        setCartData(newCart)
    }
    return (
        <CartContext.Provider value={{...cartData,addItem,removeItem,clearCart}}> 
            <div>
                <FilterMeals onFilter={filterHandler}/>
                <Meals
                    mealsData={mealsData}
                />
                <Cart/>
            </div>            
        </CartContext.Provider>
    );
};

export default App;
