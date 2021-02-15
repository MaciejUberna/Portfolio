import React from 'react';
 
import classes from './Logo.module.css'
import portfolioLogo from '../../assets/images/P.png'
 
const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={portfolioLogo} alt="Logo"/>
        </div>
    );
}
 
export default logo;