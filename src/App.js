import React from 'react';
import Header from './Component/Header'
import './App.css';
import Footer from './Component/footer'
import Select from './Component/Select'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <div>
    <BrowserRouter>
    <div className="App-header">
    <Header/>

    <Route exact path="/flightstracker" component={Select}/>

    </div>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
      
      