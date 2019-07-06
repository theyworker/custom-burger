import React from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Aux1'
import Backdrop from '../Backdrop/Backdrop'

const Modal = props => (
    <Aux>
        <Backdrop show={props.show}
        modalclicked={props.modalclick}/>
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;