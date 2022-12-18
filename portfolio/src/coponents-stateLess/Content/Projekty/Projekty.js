import React, {useContext, useState, useEffect} from 'react';
import cls from  './Projekty.module.scss';
import Tryby from '../../../assets/images/Projects/3zebatki.svg';
import languageContext from '../../../mainStates/language/language-context';

const Projekty = () => {
    const lctx = useContext(languageContext);
    const [lang,setLang] = useState(lctx.x.language);

    useEffect(() => {
        setLang(lctx.x.language);
    },[lctx.x.language]);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    const onClickUrl = (url) => {
        if(url!=='-------')
            return () => openInNewTab(url);
    };

    const prjArr = lctx.x.projects[lang];
    const displayArr = [];
    for(let i=0;i<prjArr.length;i++){
        const displayElement = [];
        for(let key in prjArr[i]) {
            if(key==='Link' || key==='Enlace') {
                displayElement.push(
                    <li  
                        key={i+key}
                        onClick={onClickUrl(prjArr[i][key])}>
                        <span className={cls.Main_Container_Link}> {key} :</span> 
                        <span className={cls.Main_Container_Link}> {prjArr[i][key]} </span>
                    </li>
                );
            } else {
                displayElement.push(
                    <li key={i+key}>
                        <span className={cls.Main_Container_Name}> {key} :</span> 
                        <span className={cls.Main_Container_Desc}> {prjArr[i][key]} </span>
                    </li>
                );
            };
        };
        displayArr.push(
                    <div key={i} className={cls.Main_Container}>
                        <object key={i+'gg'}
                            className={cls.Main_Container_Cogs_Left} 
                            type="image/svg+xml" 
                            data={Tryby}>
                            svg-animation
                        </object>
                        <ol start={prjArr.length - i}
                        key={i+'zzz'}>
                            <li>
                                <ol second={1} key={i+'xx'}>
                                    {displayElement}
                                </ol>
                            </li>
                        </ol>
                        <object 
                            key={i+'yy'}
                            className={cls.Main_Container_Cogs_Right}
                            type="image/svg+xml" 
                            data={Tryby}>
                            svg-animation
                        </object>
                    </div>
        );
    };

    return (
        <div className={`${cls.Main}`}>
            <h2>{lctx.x.mainMenu[lang].projects}</h2>
            {displayArr}
        </div>
    );
}

export default Projekty;