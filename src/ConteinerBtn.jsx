import React from "react";

export default class ResetBtn extends React.Component{

    constructor(props){
        super();
        this.state = {
            isEnabled:props.btnIsStarted
        }
    }
    render() {
        alert(this.state.isEnable)
        if (this.state.isEnabled) {
            return <div><button>Enabled</button> <button>Disabled</button></div>
        } else {
            return <div><button>Disabled</button> <button>Enabled</button></div>
        }

    }
}