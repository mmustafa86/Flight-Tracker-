import React from 'react';
import Header from './Component/Header'
import './App.css';
import Footer from './Component/footer'
import Flightstracker from './Component/flighttracker/flightstracker'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Flightsschedules from './Component/Flightschedules'
import 'mdbreact/dist/css/mdb.css';
function App() {

  return (
    <div>
    <BrowserRouter>
    <div className="App-header">
    <Header/>

    <Route exact path="/flightstracker" component={Flightstracker}/>
    <Route exact path="/flightsschedules" component={Flightsschedules}/>
    </div>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
      
      