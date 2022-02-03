import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Technology from './pages/technology';
import Marketing from './pages/maketing';
import WhoWeHelp from './pages/who-we-help';
import Resources from './pages/resources';
import WhoWeAre from './pages/who-we-are';
import TalkToUs from './pages/talk-to-us';
import Home from './pages/home';
import Header from './navigation/header';
import Footer from './navigation/footer';
import GetStarted from './pages/get-started';
import MobileApp from './pages/mobileApp';
import Reporting from './pages/reporting';
import CaseManagement from './pages/caseManagement';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
            <Header/>

          <Switch>
            <Route exact path="/" component={Home}/>

            <Route path="/technology" component={Technology}/>
            <Route path="/marketing" component={Marketing}/>
            <Route path="/who-we-help" component={WhoWeHelp}/>
            <Route path="/Resources" component={Resources}/>
            <Route path="/who-we-are" component={WhoWeAre}/>
            <Route path="/talk-to-us" component={TalkToUs}/>
            <Route path="/get-started" component={GetStarted}/>
            <Route path="/mobileApp" component={MobileApp}/>
            <Route path="/caseManagement" component={CaseManagement}/>
            <Route path="/reporting" component={Reporting}/>

          </Switch>
            <Footer/>





        </Router>
        
      </div>
    );
  }
}
