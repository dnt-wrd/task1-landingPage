import React from "react";
import style from "./Nav.module.css"
import logo from '../../assets/logo-desktop.svg'
import cn from 'classnames';



const Nav = () => {
    return (

            <nav className={cn(style.navigator, 'mx-auto')}>
                <img src={logo} alt="logo" className={style.logoImage}/>
                <ul className={style.menuList}>
                    <li className={cn(style.menuListElement, style.active)}>
                        <a href="#">Menu</a>
                    </li>
                    <li className={style.menuListElement}>
                        <a href="#">About</a>
                    </li>
                    <li className={style.menuListElement}>
                        <a href="#">Get in touch</a>
                    </li>
                </ul>
            </nav>



    );

};

export default Nav;