import React, { Fragment } from "react";
import mealsImages from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeadercartBtn from "./HeadercartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>react meals</h1>
        <HeadercartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImages} alt="" />
      </div>
    </Fragment>
  );
};
export default Header;
