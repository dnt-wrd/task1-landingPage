import React from "react";
import style from "./ListElementWithImg.module.css";

const ListElementWithImg = ({image, listTitle,listArray}) => {

    const arrToStr = (listArray) => {
        return Array.isArray(listArray) ? listArray.join(" | ") : listArray;
    }

    return (
        <ul className={style.listElement}>
            <img src={image} alt="image" className={style.imgList}/>
            <div>
                <div className={style.listTitle}>{listTitle}</div>
                <div className={style.listArray}>{arrToStr(listArray)}</div>
            </div>
        </ul>
    )
}

export default ListElementWithImg;