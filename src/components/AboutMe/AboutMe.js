import React from "react";
import cn from "classnames";
import style from "./AboutMe.module.css";
import circlePhoto from "./../../assets/circlePhoto.png"
import TextAndButton from "../TextAndButton";
import AboutList from "../AboutList";
import music from "../../assets/music.svg"
import art from "../../assets/art.svg"
import photography from "../../assets/photography.svg"
const AboutMe = () => {
    return (
        <div className={'layout'}>
            <div className={style.aboutHeader}>
                <h2 className={cn('heading2', 'mb80')}>
                    About me
                </h2>

                <div className={style.aboutInfo}>
                    <div className={style.imageCircle}>
                        <img src={circlePhoto} alt="circlePhoto" className={style.circlePhoto}/>
                    </div>
                    <TextAndButton
                        textField={'Nick  Richardson - specialist in Frontend development.\n' +
                            'Clear code is my passion.\n' +
                            'Solving issues through negotiations'}
                    />
                </div>
            </div>
            <div className={style.aboutLists1}>
                <div>
                    <div>
                        <AboutList
                            headers = {["Interests", "Education & Experience"]}
                            element1 = {[music,"Music", ["Indie rock", "Reggae"]]}
                            element2 = {[art,"Art", ["Edvard Munch", "Frida Kahlo"]]}
                            element3 = {[photography,"Photography", ["Portraits"]]}
                            element4 = {["2008 - Present", "Middle Frontend developer", "Ozon"]}
                            element5 = {["2006 - 2007", "Frontend development courses", "Stepik"]}
                            element6 = {["2000 - 2005", "Frontend developer", "Saint Petersburg State University"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;