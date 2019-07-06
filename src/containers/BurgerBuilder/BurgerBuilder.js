import React, { Component } from 'react';
import Aux from '../../hoc/Aux1'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:1,
            bacon:1,
            cheese:1,
            meat: 1,
        }
    };
    
    render() { 
        
        return ( 
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
         );
    }
}
 
export default BurgerBuilder;