import React, { Component } from "react";

class Experience extends Component{
    render(){
        return(
            <section>
                <form>
                    <h2>Experience</h2>
                    <label for = "companyName">Company Name</label>
                    <input type = "text" id = "companyName" name = "companyName"></input>
                    <label for = "position">Position</label>
                    <input type = "text" id = "position" name = "position"></input>
                    <label for = "tasks">Tasks/Resposibilities</label>
                    <textarea id = "tasks" name = "tasks"></textarea>
                    <label for = "workStart">Start Date</label>
                    <input type = "date" id = "workStart" name = "workStart"></input>
                    <label for = "workEnd">End Date</label>
                    <input type = "date" id = "workEnd" name = "workEnd"></input>
                    <input type = "button" value = "SUBMIT"></input>
                </form>
            </section>
        );
    }
}

export default Experience