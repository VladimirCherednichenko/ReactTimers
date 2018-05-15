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
        this.setState({isStarted:true, seconds: 2400})
        //this.myRef.current.value = "24:00"
        alert(this.myRef.current.value)


    }

    toSeconds = (splitedTime) => {

        var bufferArr = splitedTime.split(':');
        var minutes = buferArr[0];
        var secondsBuffer = minutes * 60 + buferArr[1];

        return secondsBuffer

    }

    callBackBtnStop = () => {
        this.setState({isStarted:false, seconds: 1000})
    }

    convertToNFormat = () => {

    }

    render()
    {
                return (
                    <div>
                        <div>Timer ex2</div>
                        <InputMask {...this.props} ref={this.myRef} mask="99:99" maskChar=""/>
                        <div>
                            <StartBtn callBackPlay={this.callBackBtnStart} callBackStop={this.callBackBtnStop}/>
                            <ConteinerBtns btnIsStarted={this.state.isStarted}/>
                        </div>


                    </div>
                )


    }
}


