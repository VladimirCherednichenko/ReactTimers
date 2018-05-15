import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import StartBtn from './PlayButton'
import ConteinerBtns from './ConteinerBtn'
import TimeLabel from './TimeLabel'

export default class TimerEx extends Component {

    constructor(props)
        {
            super(props)
            this.state = {
                isStarted:false,
                seconds:0
            }

            this.myRef = React.createRef();
        }

    callBackBtnStart = () => {

        this.setState({isStarted:true, seconds: this.toSeconds(this.myRef.current.value)})
        this.timer = setInterval(this.tick,500);
        //this.myRef.current.value = "24:00"
        //alert(this.toSeconds(this.myRef.current.value))



    }

    convertToNormalFormat = (t) => {
        let result = t;
        if (t<10)
        {
            result = "0" + t
        }

        return result

    }

    toSeconds = (splitedTime) => {

        var bufferArr = splitedTime.split(':');
        var minutes = bufferArr[0];
        var secondsBuffer = parseInt(minutes * 60) + parseInt(bufferArr[1]);

        return secondsBuffer

    }

    callBackBtnStop = () => {
        this.setState({isStarted:false, seconds: 1000})
        clearInterval(this.timer);
    }

    convertToNFormat = (seconds) => {
       var minutes = Math.floor(parseInt(seconds) / 60);
        var remainSeconds = parseInt(seconds) - minutes * 60 ;
        var result = this.convertToNormalFormat(minutes) + ":" + this.convertToNormalFormat(remainSeconds);
        return result
    }

    tick = () => {
        this.setState({seconds:this.state.seconds - 1})
        this.myRef.current.value = this.convertToNFormat(this.state.seconds);
        console.log(this.state.seconds)
    }

    render()
    {
                return (
                    <div>
                        <div>Timer ex2</div>
                        <InputMask {...this.props}  ref={this.myRef} mask="99:99" maskChar=""/>
                        <div>
                            <StartBtn callBackPlay={this.callBackBtnStart} callBackStop={this.callBackBtnStop}/>
                            <ConteinerBtns btnIsStarted={this.state.isStarted}/>
                        </div>


                    </div>
                )


    }
}


