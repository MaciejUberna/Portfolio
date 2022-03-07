import React, {useContext, useEffect, useState} from 'react';
import languageContext from '../../../mainStates/language/language-context';
import VideoSource from '../../../assets/videos/Florish.mp4';
import GrCap from '../../../assets/images/Education/graduation-cap.svg';
import cls from './Edukacja.module.scss';

const Edukacja = () => {
    const lctx = useContext(languageContext);
    const [lang,setLang] = useState(lctx.x.language);

    useEffect(() => {
        setLang(lctx.x.language);
    },[lctx.x.language]);

    const eduArr = lctx.x.education[lang];
    const displayArr = [];

    for(let i=0;i<eduArr.length;i++){
        const displayElement = [];
        const keys = Object.keys(eduArr[i]);
        keys.forEach((key) => {
            displayElement.push(
                <div
                    key={i+key}
                    
                >
                    <img src={GrCap} className={cls.Main_Container_GrCap} /> 
                    <span className={cls.Main_Container_Name}> {key} :</span> 
                    <span className={cls.Main_Container_Desc}> {eduArr[i][key]} </span>
                </div>
            )
        });
        displayArr.push(
            <li key={i} className={cls.Main_Container_ol}>
                {displayElement}
            </li>
        );
    };

    return (
        <div className={`${cls.Main}`}>
            <video loop autoPlay muted>
                <source src={VideoSource} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <p> &nbsp; </p>
            <h2>{lctx.x.mainMenu[lang].education}</h2>
            <ol className={cls.Main_Container} reversed>
                {displayArr}
            </ol>
            <p>
                {lctx.x.licenseInfo[lang].education}
                <a target="_blank" href="https://videvo.net">videvo.net</a> . 
            </p>
        </div>
    );
}

export default Edukacja;