import React from 'react';
 
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
 
const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/edukacja" >Edukacja</NavigationItem>
            <NavigationItem link="/doswiadczenie" >Doświadczenie zawodowe</NavigationItem>
            <NavigationItem link="/projekty" >Projekty</NavigationItem>
        </ul>
    );
}
 
export default navigationItems;