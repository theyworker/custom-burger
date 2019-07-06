import React from 'react';

import classes from './Burger.css'
import BurgerIngredience from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredience key={igKey + i} type={igKey} />
        })
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[]);

    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please select the ingredients</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredience type="bread-top" />
            {transformedIngredients}
            <BurgerIngredience type="bread-bottom" />
        </div>

    )

}

export default burger;