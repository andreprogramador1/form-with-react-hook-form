import React from "react";
import  {Form}  from '../components/Form'
import  {List}  from '../components/List'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routes() {

  return(
    <Switch>
      <Route path="/form" exact component={Form}/>
      <Route path="/form/:idparams" exact component={Form}/>
      <Route path="/users" exact component={List}/>
    </Switch>
  );
}


