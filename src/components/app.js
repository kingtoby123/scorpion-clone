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
import LocalMarketingPlatform from './pages/local-Marketing-Platform';
import MarketingTools from './pages/marketingTools';
import ReviewManagement from './pages/reviewManagement';
import WebsiteManagement from './pages/websiteManagement';
import ChatAndText from './pages/chatAndText';
import EmailMarketing from './pages/emailMarketing';
import OnlineScheduling from './pages/onlineScheduling';
import AppointmentReminders from './pages/appointmentReminders';
import Advertising from './pages/advertising';
import MarketInsight from './pages/marketInsight';
import PrivacyPolicy from './pages/privacyPolicy';



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
            <Route path="/mobileApp" component={MobileApp}/>
            <Route path="/caseManagement" component={CaseManagement}/>
            <Route path="/reporting" component={Reporting}/>
            <Route path="/localMarketingPlatform" component={LocalMarketingPlatform}/>
            <Route path="/marketingTools" component={MarketingTools}/>
            <Route path="/reviewManagement" component={ReviewManagement}/>
            <Route path="/websiteManagement" component={WebsiteManagement}/>
            <Route path="/chatAndText" component={ChatAndText}/>
            <Route path="/emailMarketing" component={EmailMarketing}/>
            <Route path="/onlineScheduling" component={OnlineScheduling}/>
            <Route path="/appointmentReminders" component={AppointmentReminders}/>
            <Route path="/advertising" component={Advertising}/>
            <Route path="/marketInsight" component={MarketInsight}/>
            <Route path="/privacyPolicy" component={PrivacyPolicy}/>
            <Route path="/get-started" component={GetStarted}/>

          </Switch>
          <Footer/>

        </Router>
        
      </div>
    );
  }
}
