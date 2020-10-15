import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound';
import Home from "../../pages/Home";
const Router = () => {
  return (
      <Router>
    <BrowserRouter>
    <Suspense >
    <Switch>
      {/* <Route exact path="/matches" component={Matches} /> */}
      {/* <Route exact path="/" component=/>     */}

       <Route exact path="/" component={Home}/>
      <Route exact path="*" component={PageNotFound} />

    </Switch>
    </Suspense>
    </BrowserRouter>
    </Router>
  )
}

export default Router;