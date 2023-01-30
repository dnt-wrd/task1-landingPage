import React from "react";
import style from "./TextField.module.css"

export default function TextField({
                                      text
                                 }) {
    return (
        <p className={style.textField}>
            {text}
        </p>
    );
}