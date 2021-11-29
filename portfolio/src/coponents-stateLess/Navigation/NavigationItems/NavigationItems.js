import React, { useEffect, useState, useContext } from 'react';

import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem';
import LanguageDropdown from './LanguageDropdown/LanguageDropdown';
import LanguageButtons from './LanguageButtons/LanguageButtons';
import LanguageContext from '../../../mainStates/language/language-context';

// ñ
 
const NavigationItems = (props) => {
    const lctx = useContext(LanguageContext);
    let languageSwitcher = null;
    const [edu, setEdu] = useState(lctx.x.mainMenu[lctx.x.language].education);
    const [exp, setExp] = useState(lctx.x.mainMenu[lctx.x.language].job_exp);
    const [prj,setPrj] = useState(lctx.x.mainMenu[lctx.x.language].projects);

    useEffect(
        () => {
            setEdu(lctx.x.mainMenu[lctx.x.language].education);
            setExp(lctx.x.mainMenu[lctx.x.language].job_exp);
            setPrj(lctx.x.mainMenu[lctx.x.language].projects);
            //console.log('Language: ',lctx.x.language);
        },
        [lctx.x.language]
    );

    if(props.languageSwitcherType === 'dropdown') {
        languageSwitcher = (<LanguageDropdown/>);
        //console.log('languageSwitcher: ',languageSwitcher);
     } else if(props.languageSwitcherType === 'buttons') {
         languageSwitcher = (<LanguageButtons/>);
         //console.log('languageSwitcher: ',languageSwitcher);
     }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/education" >{edu}</NavigationItem>
            <NavigationItem link="/experience" >{exp}</NavigationItem>
            <NavigationItem link="/projects" >{prj}</NavigationItem>
            {languageSwitcher}
        </ul>
    );
};
 
export default NavigationItems;