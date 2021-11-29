import './App.css';

import React, { Suspense, useState } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Edukacja from './coponents-stateLess/Content/Edukacja/Edukacja';
import Doswiadczenie from './coponents-stateLess/Content/Doswiadczenie/Doswiadczenie';
import Projekty from './coponents-stateLess/Content/Projekty/Projekty';
import LanguageContext from './mainStates/language/language-context';
import {mainInfo, mainMenu} from './assets/texts/UI/ui';

import {ReactComponent as PL} from './assets/images/flags/pl.svg';
import {ReactComponent as EN} from './assets/images/flags/gb.svg';
import {ReactComponent as ES} from './assets/images/flags/es.svg';
import {ReactComponent as Unknown} from './assets/images/flags/xx.svg';

function App() {

  const [myValue, setMyValue] = useState({
        'language' : 'xx',
        'flag' : {
          'pl' : PL,
          'en' : EN,
          'es' : ES,
          'xx' : Unknown
        }, 
        'languages' : {
          'pl' : 'Polski',
          'en' : 'English',
          'es' : 'Español',
          'xx' : 'Lorem...'
        },
        'mainInfo' : mainInfo,
        'mainMenu' : mainMenu,
  })

  let routes = (
    <Switch>
      <Route path="/education" render={(props) => <Edukacja {...props}/>} />
      <Route path='/experience' render={(props) => <Doswiadczenie {...props}/>} />
      <Route path='/projects' render={(props) => <Projekty {...props}/>} />
      <Route path="/" exact component={Edukacja} />
      <Redirect to="/" />
    </Switch>
  );

  const setLang = e => {
    const tmp = {...myValue, language: e}
    setMyValue(tmp);
    //console.log('Lang set to: ',tmp);
  };

  // x is for data, y is for function that tweaks data slightly (modifies language.)
  return (
    <LanguageContext.Provider
      value={{x: myValue, y: setLang}}
    >
      <Layout>
        <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>
      </Layout>
    </LanguageContext.Provider>
  );
};

export default withRouter(App);
