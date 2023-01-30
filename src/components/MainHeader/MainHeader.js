import React from "react";
import style from "./MainHeader.module.css"
import Nav from "../Nav";
import cn from 'classnames';
import headerPhoto from "../../assets/headerPhoto.png"
import TextAndButton from "../TextAndButton";
// import TextField from "../TextField";
// import Button from "../Button";
const MainHeader = () => {
    return (<div className={style.layout}>
        <Nav/>
        <div className={style.headerContainer}>
            <div className={cn(style.layout, style.mainHeader)}>
                <h1>Hey, I’m Nick</h1>
                <p className={cn(style.textNick, style.mb92)}>
                    Frontend developer
                </p>
                {/*<TextField*/}
                {/*    text = 'Help you to create high-quality digital*/}
                {/*    products that your clients will love and let*/}
                {/*    your business thrive'*/}
                {/*    classNameMargin = 'mb60'*/}
                {/*/>*/}
                {/*<Button />*/}
                <TextAndButton
                    textField='Help you to create high-quality digital
                     products that your clients will love and let
                            your business thrive'/>
            </div>
            <div className={style.headerImage}>
                <img src={headerPhoto} alt="Photo Nick" className={style.photoNick}/>
            </div>
        </div>

    </div>);

};

export default MainHeader;