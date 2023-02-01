import React from "react";

import style from "./InoutTextArea.module.css"
import cn from "classnames"

const InputTextArea = ({
                           header,
                           text
                       }) => {
    return (
        <div className={"mb48"}>
            <h3 className={cn("heading3", "mb8")}>{header}</h3>
            <textarea className={style.inputArea} placeholder={text}>

            </textarea>
        </div>
    )
}

export default InputTextArea;