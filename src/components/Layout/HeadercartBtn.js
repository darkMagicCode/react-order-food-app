import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeadercartBtn.module.css"
import Cartcontext from '../../store/Cartcontext';
const HeadercartBtn = props => {
    const cartCtx = useContext(Cartcontext)
    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false)

    const numberofcartitem = cartCtx.items.reduce((curnum, item) => {
        return curnum + item.amount
    }, 0)
        const {items} = cartCtx
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length===0) {
            return;
        }
        setbtnIsHighlighted(true)
        const timer = setTimeout(() => {
            setbtnIsHighlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items])
    

    return  <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>your cart</span>
        <span className={classes.badge}>{ numberofcartitem}</span>
        </button>
};
export default HeadercartBtn;