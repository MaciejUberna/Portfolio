import React, { useState } from 'react';

import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem';
import LanguageDropdown from './LanguageDropdown/LanguageDropdown';
import LanguageButtons from './LanguageButtons/LanguageButtons';

// ñ
 
const NavigationItems = (props) => {

    let languageSwitcher = null;

    if(props.languageSwitcherType === 'dropdown') {
        languageSwitcher = (<LanguageDropdown/>);
        //console.log('languageSwitcher: ',languageSwitcher);
     } else if(props.languageSwitcherType === 'buttons') {
         languageSwitcher = (<LanguageButtons/>);
         //console.log('languageSwitcher: ',languageSwitcher);
     }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/edukacja" >Edukacja</NavigationItem>
            <NavigationItem link="/doswiadczenie" >Doświadczenie zawodowe</NavigationItem>
            <NavigationItem link="/projekty" >Projekty</NavigationItem>
            {languageSwitcher}
        </ul>
    );
};
 
export default NavigationItems;