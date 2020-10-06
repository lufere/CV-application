import React, { Component } from "react";

class General extends Component{
    render(){
        return(
            <section>
                <form>
                    <h2>General Information</h2>
                    <label for = "name">Name</label>
                    <input type = "text" id = "name" name = "name"></input>
                    <label for = "email">E-mail</label>
                    <input type = "email" id = "email" name = "email"></input>
                    <label for = "phone">Phone number</label>
                    <input type = "tel" id = "phone" name = "phone"></input>
                    <input type = "button" value = "SUBMIT"></input>
                </form>
            </section>
        );
    }
}

export default General