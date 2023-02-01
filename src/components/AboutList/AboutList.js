import React from "react";
import style from "./AboutList.module.css"
import ListElementWithImg from "../ListElementWithImg";
import ListElementWithYear from "../ListElementYear";


const AboutList = ({
                       headers,
                       element1,
                       element2,
                       element3,
                       element4,
                       element5,
                       element6
                   }) => {
    return (
        <div className={style.lists}>
            <div className={style.firstList}>
                <h3 className={"heading3"}>{headers[0]}</h3>
                <li>
                    <ListElementWithImg
                        image={element1[0]}
                        listTitle={element1[1]}
                        listArray={element1[2]}
                    />
                    <ListElementWithImg
                        image={element2[0]}
                        listTitle={element2[1]}
                        listArray={element2[2]}
                    />
                    <ListElementWithImg
                        image={element3[0]}
                        listTitle={element3[1]}
                        listArray={element3[2]}
                    />
                </li>
            </div>

            <div>
                <h3 className={"heading3"}>{headers[1]}</h3>
                <li>
                    <ListElementWithYear
                        years={element4[0]}
                        job={element4[1]}
                        place={element4[2]}
                    />
                    <ListElementWithYear
                        years={element5[0]}
                        job={element5[1]}
                        place={element5[2]}
                    />
                    <ListElementWithYear
                        years={element6[0]}
                        job={element6[1]}
                        place={element6[2]}
                    />
                </li>
            </div>
        </div>


    )
}

export default AboutList;