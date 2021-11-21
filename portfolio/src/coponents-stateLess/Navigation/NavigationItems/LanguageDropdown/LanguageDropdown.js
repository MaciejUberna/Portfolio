import React, {useContext, useRef} from 'react';
import LanguageContext from '../../../../mainStates/language/language-context';
import { useDetectOutsideClick } from "../../../../customHooks/clickListenerHook";

import cls from './LanguageDropdown.module.scss';
import {ReactComponent as PL} from '../../../../assets/images/flags/pl.svg';
import {ReactComponent as EN} from '../../../../assets/images/flags/gb.svg';
import {ReactComponent as ES} from '../../../../assets/images/flags/es.svg';
import {ReactComponent as Unknown} from '../../../../assets/images/flags/xx.svg';

const LanguageDropdown = (props) => {
    const languageContext = useContext(LanguageContext);
    let welcomeMessage = null;

    if (languageContext.language === 'pl'){
        welcomeMessage = ( <div className={cls.menu_svg_text}>
            <PL className={cls.menu_svg}/>&nbsp;<span>Język</span>
            <span className={cls.menu_arrow}>&nbsp;&#10225;</span>
        </div>);
    } else if(languageContext.language === 'en'){
        welcomeMessage = ( <div className={cls.menu_svg_text}>
            <EN className={cls.menu_svg}/>&nbsp;<span>Language</span>
            <span className={cls.menu_arrow}>&nbsp;&#10225;</span>
        </div>);
    } else if(languageContext.language === 'es'){
        welcomeMessage = ( <div className={cls.menu_svg_text}>
            <ES className={cls.menu_svg}/>&nbsp;<span>Idioma</span>
            <span className={cls.menu_arrow}>&nbsp;&#10225;</span>
        </div>);
    } else {
        welcomeMessage = ( <div className={cls.menu_svg_text}>
            <Unknown className={cls.menu_svg}/>
            &nbsp;???&nbsp;
            <span className={cls.menu_arrow}>
                &#10225;
            </span>
        </div>);
        console.log(languageContext.language);
    }

    const itemClick = (e) => {
      console.log(e);
    }

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    let dropdownMenuClass = isActive ? 
      `${cls.menu} ${cls.menu_container_active}` 
      : 
      `${cls.menu} ${cls.menu_container_inactive}`;

    return (
        <div className={cls.menu}>
          <div className={cls.menu_container}>
            <button onClick={onClick} className={cls.menu_trigger}>
              {welcomeMessage}
            </button>
            <nav
              ref={dropdownRef}
              className={dropdownMenuClass}
            >
              <ul>
                <li onClick={itemClick.bind(this,'pl')}>
                  <PL className={cls.menu_svg}/> Polski
                </li>
                <li onClick={itemClick.bind(this,'en')}>
                  <EN className={cls.menu_svg}/> English
                </li>
                <li onClick={itemClick.bind(this,'es')}>
                  <ES className={cls.menu_svg}/> Español
                </li>
              </ul>
            </nav>
          </div>
        </div>
    );
};

export default LanguageDropdown;

