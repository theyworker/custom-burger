import React, { Component } from 'react';
import Aux from '../../hoc/Aux1'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary'
import Modal from '../../component/UI/Modal/Modal';

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

        totalPrice: 0,
        purchasable: false,
        purchasing: false
    };

    addIngredientsHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount + 1;
        let updadedIngredients = { ...this.state.ingredients }

        updadedIngredients[type] = updatedCount;

        let oldPrice = this.state.totalPrice;
        let priceAddition = INGREDIENT_PRICES[type];
        let newPrice = oldPrice + priceAddition;

        this.updatePurchaseState(updadedIngredients)

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
            this.updatePurchaseState(updadedIngredients)
        }
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)

        this.setState({ purchasable: sum > 0 })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing : false})
    }


    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (let key in disabledInfo) { disabledInfo[key] = disabledInfo[key] <= 0 }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalclick={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdded={this.addIngredientsHandler}
                    ingredientsRemoved={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable} />
            </Aux>
        );
    }
}

export default BurgerBuilder;