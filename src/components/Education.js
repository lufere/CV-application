import React, { Component } from "react";

class Education extends Component{
    render(){
        return(
            <section>
                <form>
                    <h2>Education</h2>
                    <label for = "schoolName">School Name</label>
                    <input type = "text" id = "schoolName" name = "schoolName"></input>
                    <label for = "studyTitle">Title</label>
                    <input type = "text" id = "studyTitle" name = "studyTitle"></input>
                    <label for = "studyStart">Start Date</label>
                    <input type = "date" id = "studyStart" name = "studyStart"></input>
                    <label for = "studyEnd">End Date</label>
                    <input type = "date" id = "studyEnd" name = "studyEnd"></input>
                    <input type = "button" value = "SUBMIT"></input>
                </form>
            </section>
        );
    }
}

export default Education