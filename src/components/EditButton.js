import React from "react";

const EditButton = props =>{
    if(props.finished){
        return(
            <div></div>
        );
    }
    return(
        <input
            type = "button"
            value = {props.value}
            onClick = {props.onClick}
        />
    );
}

export default EditButton
