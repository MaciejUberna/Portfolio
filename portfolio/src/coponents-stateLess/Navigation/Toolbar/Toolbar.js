import React, {useContext} from 'react';
import Photo from '../../UI/MainPhoto/Photo';
import Info from '../../UI/MainInfo/MainInfo';
import PropTypes from 'prop-types';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import LanguageContext from '../../../mainStates/language/language-context';
 
const Toolbar = props => {
    const lctx = useContext(LanguageContext);
    let Flag = lctx.x.flag[lctx.x.language];

    return (
        <Auxiliary>
            <div className={classes.GeneralInfo}>
                <div className={classes.GeneralInfo__headFiller}>

                </div>
                <div className={classes.GeneralInfo__photoContainer}>
                    <Photo/>
                </div>
                <div className={classes.GeneralInfo__infoContainer}>
                    <Info/>
                </div>
                <div className={classes.GeneralInfo__tailFiller}>

                </div>
            </div>
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems languageSwitcherType="dropdown" />
                </nav>
                    {Flag
                    ?
                        <Flag className={classes.Svg}/>
                    : 
                        null
                    }
            </header>
        </Auxiliary>
    );
    
};

Toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func.isRequired
};
 
export default Toolbar;