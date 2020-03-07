import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './search.css'
import FlightInfo from './flightSchedulesinfo'
import axios from 'axios'

export default class Flightschedules extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flight: {},
        airport:'',
        airline:'',
        airlines: [],
        laoding: false
    };
  }

  recordAirline(event){
    let info=event.target.value;
    // console.log(info)
    this.setState({airline: info})
}



  getInfo (){
    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'http://aviation-edge.com/v2/public/timetable?key='+apiKey+'&iataCode='+this.state.airport+'&type=departure')
    .then(({ data }) => {
      console.log(data)
      this.setState({ flight: data })
    })
  }

  recordAirport(event){
    let info=event.target.value;
    console.log(info)
    this.setState({airport: info})
}

submitInfo(event){
    event.preventDefault() 
console.log('test')
this.getInfo ()

  
  }


  Airlines(){

    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'https://aviation-edge.com/v2/public/airlineDatabase?key='+apiKey+'&codeIso2Country=US')
    .then(({ data }) => {
    //   console.log(data)

this.setState({ airlines: data })
    
    })


  }

  componentDidMount() {

   this.Airlines()
  }
  
  render() {
    return (
    <div>
        <div  className="flightSchedule">
        <Box  boxShadow={0} component="span" display="inline">
      <form  noValidate autoComplete="off">
      <h4>Check Flight Schedule</h4>
   <TextField id="filled-basic" label="Airport" variant="filled"onChange={(e)=> this.recordAirport(e)}/>

   

  <FormControl variant="filled" className="{classes.formControl}">
        <InputLabel id="demo-simple-select-filled-label">Airline</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={this.state.airline}
          onChange={(e)=> this.recordAirline(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.state.airlines.map((airline)=><MenuItem value={airline.codeIcaoAirline}>{airline.nameAirline}</MenuItem> )}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl variant="filled" className="{classes.formControl}">
        <InputLabel id="demo-simple-select-filled-label">Flight info</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value="{age}"
          onChange="{handleChange}"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Arrival</MenuItem>
          <MenuItem value={10}>Departure</MenuItem>
        
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit" type="submit"onClick={(e)=>this.submitInfo(e)}>Search </Button>
</form>
</Box>

      </div>
      <div classname='result'>
    {(this.state) ? <FlightInfo info={this.state}/> :<div></div>}
    </div>
      </div>
    )
  }
  
}
