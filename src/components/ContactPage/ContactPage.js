import React from "react";

import style from "./ContactPage.module.css";
import InputForm from "../InputForm";
import InputTextArea from "../InputTextArea";
import Button from "../Button";
import cn from "classnames"

const ContactPage =() => {
    return (
        <div className={style.contactPage}>
            <div className={style.formContainer}>
                <h2 className={cn("heading2", "mb48")}>Let’s discuss your project</h2>
                <form action="" className={cn(style.inputs, "mb48")} >
                    <InputForm
                        header={"Your full name"}
                        text={"Name Surname"}
                    />

                    <InputForm
                        header={"Your email"}
                        text={"name@example.com"}
                    />


                </form>
                <InputTextArea
                    header={"Tell me about your project"}
                    text={"Add here a general description of your idea and target aim"}
                />
                <Button
                    text={"Submit"}
                />
            </div>
        </div>
    )
}

export default ContactPage;