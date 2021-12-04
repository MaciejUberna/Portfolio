import React, {useContext, useEffect, useState} from 'react';
import languageContext from '../../../mainStates/language/language-context';
import GrCap from '../../../assets/images/Education/graduation-cap.svg';
import cls from './Edukacja.module.scss';

const Edukacja = (props) => {
    const lctx = useContext(languageContext);
    const [lang,setLang] = useState(lctx.x.language);

    useEffect(() => {
        setLang(lctx.x.language);
    },[lctx.x.language]);

    const eduArr = lctx.x.education[lang];
    const displayArr = [];
    for(let i=0;i<eduArr.length;i++){
        const displayElement = [];
        let ctr = 0;
        for(let key in eduArr[i]) {
            if (ctr===6) {
                displayElement.push(
                    <li
                        key={i+key}
                        className={cls.Main_Container_Diploma}
                    >
                        <p className={cls.Main_Container_Diploma_Title}>
                            {key}
                        </p>
                        <img 
                        src={eduArr[i][key]}
                        />
                    </li>
                );
            } else {
                displayElement.push(
                    <li
                        key={i+key}
                        
                    >
                        <img src={GrCap} className={cls.Main_Container_GrCap} /> 
                        <span className={cls.Main_Container_Name}> {key} :</span> 
                        <span className={cls.Main_Container_Desc}> {eduArr[i][key]} </span>
                    </li>
                )
            }
            ctr++;
        };
        displayArr.push(
            <ul key={i} className={cls.Main_Container_ul}>
                {displayElement}
            </ul>
        );
    };

    return (
        <div className={`${cls.Main}`}>
            <h2>{lctx.x.mainMenu[lang].education}</h2>
            <div className={cls.Main_Container}>
                {displayArr}
            </div>
        </div>
    );
}

export default Edukacja;