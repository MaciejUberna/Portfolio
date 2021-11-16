import React, {useContext} from 'react';
import LanguageContext from '../../../../mainStates/language/language-context';

import cls from './LanguageDropdown.module.scss';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import {ReactComponent as PL} from '../../../../assets/images/flags/pl.svg';
import {ReactComponent as EN} from '../../../../assets/images/flags/gb.svg';
import {ReactComponent as ES} from '../../../../assets/images/flags/es.svg';
import {ReactComponent as Unknown} from '../../../../assets/images/flags/xx.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

const LanguageDropdown = (props) => {
    const languageContext = useContext(LanguageContext);
    let welcomeMessage = null;

    if (languageContext.language === 'pl'){
        welcomeMessage = ( <div className={cls.DrpDwn__Item}>
            <PL className={cls.DrpDwn__Svg}/>&nbsp;<span>Język</span>
            <span className={cls.DrpDwn__ArrowDown}>&nbsp;&#10225;</span>
        </div>);
    } else if(languageContext.language === 'en'){
        welcomeMessage = ( <div className={cls.DrpDwn__Item}>
            <EN className={cls.DrpDwn__Svg}/>&nbsp;<span>Language</span>
            <span className={cls.DrpDwn__ArrowDown}>&nbsp;&#10225;</span>
        </div>);
    } else if(languageContext.language === 'es'){
        welcomeMessage = ( <div className={cls.DrpDwn__Item}>
            <ES className={cls.DrpDwn__Svg}/>&nbsp;<span>Idioma</span>
            <span className={cls.DrpDwn__ArrowDown}>&nbsp;&#10225;</span>
        </div>);
    } else {
        welcomeMessage = ( <div className={cls.DrpDwn__Item}>
            <Unknown className={cls.DrpDwn__Svg}/>
            &nbsp;???&nbsp;
            <span className={cls.DrpDwn__ArrowDown}>
                &#10225;
            </span>
        </div>);
        console.log(languageContext.language);
    }

    const handleSelect=(e)=>{
        console.log(e);
    };

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        // <DropdownButton 
        //     onSelect={handleSelect}
        //     className={cls.DrpDwn}
        //     title={welcomeMessage}
        //     variant='secondary'
        //     as={ButtonGroup}
        // >
        // {/* <Dropdown.Header className={cls.DrpDwn__Menu}> -------------- </Dropdown.Header> */}
        // {/* <Dropdown.Toggle variant="secondary" className={cls.Dropdown} bsSize="small">
        //     {welcomeMessage}
        // </Dropdown.Toggle> */}
        //     <Dropdown.Menu  className={cls.DrpDwn__Menu}>
        //         <Dropdown.Item eventKey="pl">
        //             <PL className={cls.DrpDwn__Svg}/>
        //             &nbsp;
        //             Polski
        //             </Dropdown.Item>
        //         <Dropdown.Item eventKey="en">
        //             <EN className={cls.DrpDwn__Svg}/>
        //             &nbsp;
        //             English
        //         </Dropdown.Item>
        //         <Dropdown.Item eventKey="es">
        //             <ES className={cls.DrpDwn__Svg}/>
        //             &nbsp;
        //             Español
        //         </Dropdown.Item>
        //     </Dropdown.Menu>
        // </DropdownButton>

        <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          {welcomeMessage}
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><a href="/messages">Messages</a></li>
            <li><a href="/trips">Trips</a></li>
            <li><a href="/saved">Saved</a></li>
          </ul>
        </nav>
      </div>

    );
};

export default LanguageDropdown;

