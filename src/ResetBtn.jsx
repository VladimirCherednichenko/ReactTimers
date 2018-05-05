import React from "react";

export default class ResetBtn extends React.Component{

    constructor(props){
        super();
        this.callBack = props.resetCallBack;
    }
    render() {
        return <button onClick={this.callBack}>Reset</button>
    }
}