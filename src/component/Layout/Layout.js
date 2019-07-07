import React, { Component } from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// const layout = (props) => (
//     <Aux>
//         <SideDrawer/>
//         <Toolbar/>
//         <main className = { classes.Content } >
//             {props.children}
//         </main>
//     </Aux>
// );

class layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false })
    }
    render() { 
        return ( 
                <Aux>
                    <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler}/>
                    <Toolbar/>
                    <main className = { classes.Content } >
                        {this.props.children}
                    </main>
                </Aux>);
    }
}

export default layout;