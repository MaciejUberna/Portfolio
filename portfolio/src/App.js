import './App.css';

import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Edukacja from './containers/Edukacja/Edukacja';
import Doswiadczenie from './containers/Doswiadczenie/Doswiadczenie';
import Projekty from './containers/Projekty/Projekty';

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
    <Layout>
      <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>
    </Layout>
  );
};

export default withRouter(App);
