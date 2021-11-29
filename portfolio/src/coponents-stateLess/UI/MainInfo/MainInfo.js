import classes from './MainInfo.module.scss';
import React, {useContext, useState, useEffect} from 'react';
import LanguageContext from '../../../mainStates/language/language-context';

const Info = () => {
    const lctx = useContext(LanguageContext);
    const [mainInfo, setMainInfo] = useState(lctx.x.mainInfo[lctx.x.language]);

    useEffect(() => {
        setMainInfo(lctx.x.mainInfo[lctx.x.language])
    },[lctx.x.language])

    const dataArr = [];
    for(let key in mainInfo) {
        dataArr.push(
            <div key={key} className={classes.Data__Row}>
                <div className={classes.Data__Row__Name}>{key} :</div>
                <div className={classes.Data__Row__Desc}>&nbsp;{mainInfo[key]}</div>
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