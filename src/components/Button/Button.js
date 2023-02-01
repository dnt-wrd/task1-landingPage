import React from "react";

import style from "./Button.module.css"
import btnImg from "./../../assets/btnWhite.svg"
import cn from "classnames";

const Button = ({text = "Get in touch"}) => {
    console.log(text)

    return (
        <button className={cn(style.btn)}>
            <div className={style.btnInputContainer}>
                <p className={style.btnText}>
                    {text}
                </p>
                <img src={btnImg} alt="" className={style.btnImg}/>
            </div>
        </button>
    )
}

export default Button;