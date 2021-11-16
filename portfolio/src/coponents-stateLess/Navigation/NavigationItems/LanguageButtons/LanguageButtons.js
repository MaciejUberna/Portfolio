import React from 'react';
import cls from './LanguageButtons.module.scss'
import {ReactComponent as PL} from '../../../../assets/images/flags/pl.svg';
import {ReactComponent as EN} from '../../../../assets/images/flags/gb.svg';
import {ReactComponent as ES} from '../../../../assets/images/flags/es.svg';
import Button from'./LanguageButton/LanguageButton';

const Buttons = () => {

    return (
        <div className={cls.ButtonList}>
            <Button flag={PL} stateLang='pl'> Polski </Button>
            <Button flag={EN} stateLang='en'> English </Button>
            <Button flag={ES} stateLang='es'> Español </Button>
        </div>
    );
};

export default Buttons;

