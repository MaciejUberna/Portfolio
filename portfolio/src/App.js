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

import ProjPL from './assets/texts/Projekty/projects_PL';
import ProjEN from './assets/texts/Projekty/projects_EN';
import ProjES from './assets/texts/Projekty/projects_ES';
import ProjXX from './assets/texts/Projekty/projects_XX';

import eduPL from './assets/texts/Edukacja/education_PL';
import eduEN from './assets/texts/Edukacja/education_EN';
import eduES from './assets/texts/Edukacja/education_ES';
import eduXX from './assets/texts/Edukacja/education_XX';

import expPL from './assets/texts/Doswiadczenie/experience_PL';
import expEN from './assets/texts/Doswiadczenie/experience_EN';
import expES from './assets/texts/Doswiadczenie/experience_ES';
import expXX from './assets/texts/Doswiadczenie/experience_XX';
import expConvert from './assets/texts/Doswiadczenie/conversion';

import ISTQBcert from './assets/images/Education/istqb2015.jpg';
import PJWSTKdiploma from './assets/images/Education/dyplomPJWSTK.jpg';

function App() {

  const [myValue, setMyValue] = useState({
        'language' : 'pl',
        'flag' : {
          'pl' : PL,
          'en' : EN,
          'es' : ES,
        }, 
        'languages' : {
          'pl' : 'Polski',
          'en' : 'English',
          'es' : 'Español',
          'xx' : 'Lorem...'
        },
        'mainInfo' : mainInfo,
        'mainMenu' : mainMenu,
        'projects' : {
          'pl': ProjPL,
          'en': ProjEN,
          'es': ProjES,
          'xx': ProjXX 
        },
        'education': {
          'pl': [{...eduPL[0]},
                  {...eduPL[1]},
              ],
          'en': [{...eduEN[0]},
                  {...eduEN[1]},
            ],
          'es': [{...eduES[0]},
                  {...eduES[1]},
              ],
          'xx': [{...eduXX[0]},
                  {...eduXX[1]},
          ]
        },
        'job_exp' : {
          'pl': expPL,
          'en': expEN,
          'es': expES,
          'xx': expXX
        },
        'conv': expConvert
  });

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
    const tmp = {...myValue, language: e};
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
