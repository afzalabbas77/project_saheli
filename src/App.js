import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import HomeCenterArea from './HomeCenterArea';
import About from './About';
import DoctorSpeak from './DoctorSpeak';
import SmilePlease from './SmilePlease';
import Pregnancy from './Pregnancy';
import {Switch, Route, Redirect} from 'react-router-dom';
import FetchAPI from './FetchAPI'



const App = () => {
  
  return (
    <>
      <Header />
     
      <Switch>
        <Route exact path ="/" component={HomeCenterArea} />
        <Route exact path ="/About" component={About} />
        <Route exact path ="/DoctorSpeak" component={DoctorSpeak} />
        <Route exact path ="/SmilePlease" component={SmilePlease} />
        <Route exact path = "/Pregnancy" component={Pregnancy} />
        <Route exact path = "/FetchAPI" component={FetchAPI} />
        <Redirect to="/" />
        
        </Switch>
      <Footer />
    </>
  )
}

export default App;
