import React from "react";
import style from "./ListElementWithYear.module.css";

const ListElementWithYear = ({years, job ,place }) => {

    return (
        <ul className={style.listElement}>
            <div className={style.years}>{years}</div>
            <div>
                <div className={style.listJob}>{job}</div>
                <div className={style.listPlace}>{place}</div>
            </div>
        </ul>
    )
}

export default ListElementWithYear;