import s from "../../Users/UsersList/Users.module.css";
import preloder from "../../../assets/Spinner.png";
import React from "react";

const Preloader = () => {
    return (
        <img className={s.preloader} src={preloder} alt='loading' />
    )
}

export default Preloader