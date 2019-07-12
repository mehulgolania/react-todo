import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../component/navigation';
import Home from '../Pages/home';
import NoMatch from '../Pages/nomatch';

function Layout() {
  return(
    <>
      <Navigation />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="" component={NoMatch} />
      </Switch>
    </>
  );
}

export default Layout;