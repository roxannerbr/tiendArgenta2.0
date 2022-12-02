import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


export default class Countdown1 extends React.Component{
  constructor(){
    super()
    this.state={
      endDate: new Date()
    };
  }

  startInterval=(e)=>{    
    let that=this
    const second=1000,
    minute=second*60,
    hour=minute*60,
    day=hour*24

    let x = setInterval(function () {     
      let distance= that.state.endDate.getTime() - new Date().getTime()
      
      console.log('endDate'+that.state.endDate);
      console.log('now' +new Date().getTime())
      if (distance >= 0) {
        document.getElementById("days").innerText = Math.floor(distance/(day))
        document.getElementById("hours").innerText = Math.floor((distance%(day))/(hour))
        document.getElementById("mins").innerText = Math.floor((distance%(hour))/(minute))
        document.getElementById("secs").innerText = Math.floor((distance%(minute))/(second))
      }},second)
  }

  handleChange (e){
    this.startInterval(e)
    this.setState({endDate: e})
  }

  render(){
    return(
      <div >

       {/* <Datepicker/> */}
        {/* selected = {new Date("Sat Dec 03 2022 16:00:00 GMT-3")} 
       dateFormat="EEEE, MMM d, YYYY"  */}  

       <div className="datepicker">
       <DatePicker
          className="form-control"
          selected={new Date()}
          onChange={(e)=>this.handleChange(e)} //only when value has changed
          dateFormat={"EEEE, MMM d, yyyy"}
        /> 
        </div>    
      
      <div className="cuenta"> 
        <ul>
         <li><span id="days">00</span>Dias</li>
         <li><span id="hours">00</span>hs</li>
         <li><span id="mins">00</span>min</li>
         <li><span id="secs">00</span>seg</li>
        </ul>
       </div> 

      </div>

    );
  }
}