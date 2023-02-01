import React from "react";

// import style from "./TextAndButton.module.css"
import TextField from "../TextField";
import Button from "../Button";

const TextAndButton = ({textField,
                       textButton}) => {

    return (
        <div>
            <TextField
                text = {textField}
            />

            <Button
                text={textButton}
            />
        </div>


    )
}

export default TextAndButton;