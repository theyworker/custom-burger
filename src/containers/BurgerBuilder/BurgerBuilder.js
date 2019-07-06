import React, { Component } from 'react';
import Aux from '../../hoc/Aux1'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 10,
    cheese: 8,
    meat: 9
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },

        totalPrice: 0
    };

    addIngredientsHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        let updadedIngredients = { ...this.state.ingredients }

        updadedIngredients[type] = updatedCount;

        let oldPrice = this.state.totalPrice;
        let priceAddition = INGREDIENT_PRICES[type];
        let newPrice = oldPrice + priceAddition;


        this.setState({ totalPrice: newPrice, ingredients: updadedIngredients })
    }

    removeIngredientsHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            let updatedCount = oldCount - 1;
            let updadedIngredients = { ...this.state.ingredients }

            updadedIngredients[type] = updatedCount;

            let oldPrice = this.state.totalPrice;
            let priceDeduction = INGREDIENT_PRICES[type];
            let newPrice = oldPrice - priceDeduction;


            this.setState({ totalPrice: newPrice, ingredients: updadedIngredients })
        }
    }



    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (let key in disabledInfo) { disabledInfo[key] = disabledInfo[key] <=0 }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdded={this.addIngredientsHandler}
                    ingredientsRemoved={this.removeIngredientsHandler}
                    disabled = {disabledInfo} 
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;