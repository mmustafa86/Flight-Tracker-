import React from 'react';
import Header from './Component/Header'
import './App.css';
import Footer from './Component/footer'
import Select from './Component/Select'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import Info from './Component/info'

function App() {

  return (
    <div className="App-header">
    <Header/>
    <Select/>

 <Footer/>
    </div>
  );
}

export default App;
      