import classes from './MainInfo.module.scss';
import React from 'react';
import PlData from '../../../assets/texts/basicInfo_PL';

const Info = props => {
    const dataArr = [];
    for(let key in PlData) {
        dataArr.push(
            <div key={key} className={classes.Data__Row}>
                <div className={classes.Data__Row__Name}>{key} :</div>
                <div className={classes.Data__Row__Desc}>&nbsp;{PlData[key]}</div>
            </div>
        );
    };

    return (
        <div className={classes.Data}>
            {dataArr}
        </div>
    );
};

export default Info;