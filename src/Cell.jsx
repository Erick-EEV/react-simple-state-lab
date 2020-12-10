import React, { Component } from 'react'
import { Matrix } from "./Matrix";

export default class Cell extends Component {

    constructor(props){
        super(props)
        this.state ={
            color: props.value
        }
    }

    handleOnClick = (event) => {
        // console.log("I've Been Clicked");
        this.setState({
            color: "#333"
        })
    }



    render() {
        return (
            <div className="cell" onClick={this.handleOnClick} style={{backgroundColor: this.state.color}}>
                
            </div>
        )
    }
}
