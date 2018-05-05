import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import StartBtn from './PlayButton'
import ConteinerBtns from './ConteinerBtn'


export default class TimerEx extends Component {

    constructor(props)
        {
            super(props)
            this.state = {
                isStarted:false,
                seconds:1600
            }

            this.myRef = React.createRef();
        }

    callBackBtnStart = () => {
        this.setState({isStarted:true, seconds: 2400})

    }

    callBackBtnStop = () => {
        this.setState({isStarted:false})
    }

    render()
    {



        if (this.state.isStarted) {
            return (
                <div>
                    <div>Timer ex2</div>
                    <InputMask {...this.props} value = {this.state.seconds} mask="99:99" maskChar=""/>
                    <div>
                        <StartBtn callBackPlay={this.callBackBtnStart} callBackStop={this.callBackBtnStop}/>
                        <div><button>Disabled</button> <button>Enabled</button></div>
                    </div>


                </div>
            )

        } else {
            return (
                <div>
                    <div>Timer ex2</div>
                    <InputMask {...this.props} inputRef={this.myRef} id = "input" mask="99:99" maskChar=" "/>
                    <div>
                        <StartBtn callBackPlay={this.callBackBtnStart}  callBackStop={this.callBackBtnStop}/>
                        <div><button>Enabled</button> <button>Disabled</button></div>
                    </div>


                </div>
            )
        }

    }
}


