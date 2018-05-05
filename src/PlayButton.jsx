import React from "react";
import PropTypes from 'prop-types';

export default class PlayButton extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            timerState:"Play"
        }
        this.callBackStop = props.callBackPlay;
        this.callBackPlay = props.callBackStop;
        //this.timerState = "Play"
    }

    changeState = () => {

        if (this.state.timerState == "Play") {
            this.setState({timerState:"Stop"})
            this.callBackStop()

        } else {
            this.setState({timerState:"Play"})
            this.callBackPlay()
        }

    };


    render() {
        return (<button onClick={this.changeState}>{this.state.timerState}</button>)
    }
}