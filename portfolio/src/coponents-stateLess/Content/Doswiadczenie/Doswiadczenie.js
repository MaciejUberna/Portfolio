import React, {useContext, useEffect, useState} from 'react';
import languageContext from '../../../mainStates/language/language-context';
import cls from './Doswiadczenie.module.scss';

const Doswiadczenie = () => {
    const lctx = useContext(languageContext);
    const [lang,setLang] = useState(lctx.x.language);

    const expArr = lctx.x.job_exp[lang];
    const displayArr = [];
    for(let i=0;i<expArr.length;i++){
        displayArr.push(
            <li key={i+'lista'}>
                <p>
                    <span className={cls.Main_Container_JobPosition}>
                        {expArr[i]["job-position"]}
                    </span>
                    <span className={cls.Main_Container_Interval}> 
                        &nbsp;/ {expArr[i]["start-date"]} - {expArr[i]["end-date"]}
                    </span>
                </p>
                <p className={cls.Main_Container_Company}>
                    <span>
                        {expArr[i]["company"]} ({expArr[i]["localization"]})
                    </span>
                </p>
                <p className={cls.Main_Container_Desc}>
                    <span>
                        {expArr[i]["job-desc"]}
                    </span>
                </p>
                <p className={cls.Main_Container_Git}>
                    <span >
                        {expArr[i]["git"]}
                    </span>
                </p>
            </li>
        );
    }   

    useEffect(() => {
        setLang(lctx.x.language);
    },[lctx.x.language]);

    return (
        <div className={cls.Main}>
        <h2>{lctx.x.mainMenu[lang].job_exp}</h2>
        <ol className={cls.Main_Container} reversed>
            {displayArr}
        </ol>
        </div>
    );
}

export default Doswiadczenie;