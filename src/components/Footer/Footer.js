import React from "react";

import style from "./Footer.module.css"
import cn from "classnames"

const Footer = () => {

    return (
        <footer className={cn("layout", style.footerElement)}>
            <p className={style.footerText}>
                © 2022 JetRuby. All Rights Reserved
            </p>
        </footer>

    )

}

export default Footer;