import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playbtn from "./PlayButton";
import TimerLabel from "./TimeLabel";
import ResetButton from "./ResetBtn"
import InputMask from 'react-input-mask';


class App extends Component {

    constructor(props)
    {
        super(props)
        this.state =
            {
                timeState:"Play",
                elapsedTime:0

            }
        this.oldElapsedTime = 0
       // this.start = new Date;

    }

    callBackStop = () => {
        clearInterval(this.timer);
        this.oldElapsedTime = this.state.elapsedTime
        this.setState({timeState:"Play", min:1})
    }

    tick = () => {
        this.setState({elapsedTime:new Date() - this.start + this.oldElapsedTime})
    }

    callBackPlay = () => {

        this.start = new Date;
        this.timer = setInterval(this.tick,50);
        this.setState({timeState:"Stop"})
    }

    convertToNormalFormat = (t) => {
        let result = t;
        if (t<10)
        {
          result = "0" + t
        }

        return result

    }

    callBackReset = () => {
        this.oldElapsedTime = 0
        this.setState({elapsedTime:0})
    }


  render()
  {
      var seconds = Math.round(this.state.elapsedTime / 1000);
      var minutes = Math.floor(seconds / 60);
      var seconds = seconds - minutes * 60;



      return(
          <div>Timer

              <div>
                  <TimerLabel min = {this.convertToNormalFormat(minutes)} sec = {this.convertToNormalFormat(seconds)}/>
              </div>

              <div>
                  <Playbtn callBackStop = {this.callBackStop} callBackPlay = {this.callBackPlay}/>
                  <ResetButton resetCallBack = {this.callBackReset}/>

              </div>
          </div>
      )



  }
}

export default App;
