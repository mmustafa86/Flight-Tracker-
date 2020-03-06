import React from 'react';
import Header from './Component/Header'
import './App.css';
import Footer from './Component/footer'
import Flightstracker from './Component/flighttracker/flightstracker'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Flightsschedules from './Component/flightschedule/Flightschedules'
import Main from './Component/main'
import 'mdbreact/dist/css/mdb.css';
import Search from './Component/Map/search'
function App() {

  return (
    <div>
    {/* <SimpleMap/> */}
    <BrowserRouter>
    <div className="App-header">
    <Header/>
    <Route exact path="/" component={Main}/>
    <Route exact path="/flightstracker" component={Flightstracker}/>
    <Route exact path="/flightsschedules" component={Flightsschedules}/>
    <Route exact path="/location" component={Search}/>
    <Footer/>
    </div>

    </BrowserRouter>
   
    </div>
  );
}

export default App;
      
      