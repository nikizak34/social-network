import React from 'react';
import s from "../../Users/Users.module.css";
import preloader from "../../../assets/images/JointRevolvingAntelopegroundsquirrel-size_restricted.gif";

export const Preloader = () => {
    return (
        <img className={s.img} src={preloader} alt="error"/>
    );
};

