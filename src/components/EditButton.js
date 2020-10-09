import React, { Component } from "react";

class EditButton extends Component{
    render(){
        if(this.props.finished){
            return(
                <div></div>
            );
        }
        return(
            <input
                type = "button"
                value = {this.props.value}
                onClick = {this.props.onClick}
            />
        );
    }
}

export default EditButton
