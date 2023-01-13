import React, { Fragment } from "react";
import classes from './Modal.module.css'; 
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop } onClick={props.onhideCart}>
        
    </div>
 };
const ModalOverlay = props => {
    return<div className={classes.modal }>
        <div className={classes.content}>{props.children }</div>
    </div>
};
 const portalElment = document.getElementById('overlays')
const Modal = props => {
    return <Fragment>
        {/* <Backdrop />
        <ModalOverlay>{ props.children}</ModalOverlay> */}
        {ReactDOM.createPortal(<Backdrop onhideCart={props.onhideCart}/>,portalElment) }
        {ReactDOM.createPortal(<ModalOverlay>{ props.children}</ModalOverlay>,portalElment)}

    </Fragment>
    
 };
export default Modal;