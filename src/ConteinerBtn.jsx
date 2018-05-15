import React from "react";

export default class ResetBtn extends React.Component{

    constructor(props){
        super();
        //this.btnIsStarted = props.btnIsStarted;

            this.isEnabled = props.btnIsStarted

    }

    componentWillReceiveProps(nextProps)
    {
       this.isEnabled = nextProps.btnIsStarted
    }


    render() {
        if (this.isEnabled) {
            return <div><button>Enabled</button> <button>Disabled</button></div>
        } else {
            return <div><button>Disabled</button> <button>Enabled</button></div>
        }

    }
}