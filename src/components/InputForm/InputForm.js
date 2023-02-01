import React from "react";

import style from "./InputForm.module.css"

const InputForm = ({
                       text,
                       header
                   }) => {
    return (
        <div>
            <p className={"mb8"}>{header}</p>
            <input type="text" placeholder={text} className={style.inputElement} />
        </div>
    )
}

export default InputForm;