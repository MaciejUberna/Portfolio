import './App.css';

/*
#000055
#7CB4C5
#01829B
#334A52

#810209
#7B7485
#AFA8BA
#000055
*/

import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Edukacja from './coponents-stateLess/Content/Edukacja/Edukacja';
import Doswiadczenie from './coponents-stateLess/Content/Doswiadczenie/Doswiadczenie';
import Projekty from './coponents-stateLess/Content/Projekty/Projekty';
import LanguageContext from './mainStates/language/language-context';

function App() {

  let routes = (
    <Switch>
      <Route path="/edukacja" render={(props) => <Edukacja {...props}/>} />
      <Route path='/doswiadczenie' render={(props) => <Doswiadczenie {...props}/>} />
      <Route path='/projekty' render={(props) => <Projekty {...props}/>} />
      <Route path="/" exact component={Edukacja} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <LanguageContext.Provider
      value={{
        language: 'xx'
      }}
    >
      <Layout>
        <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>
      </Layout>
    </LanguageContext.Provider>
  );
};

export default withRouter(App);
