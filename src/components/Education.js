import React, { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event);
    }

    render(){
        let educationList = this.props.education.map((school)=>{
            return(
                <li key = {school.name+school.title}>
                    {`Institution: ${school.name}, 
                    Title: ${school.title}, 
                    Start Date: ${school.start}
                    End Date: ${school.end} `}
                </li>
                // <li>{school.name+", "+school.title}</li>
            );
        })
        return(
            <section>
                <form>
                    <h2>Education</h2>
                        <label>School Name: 
                            <input 
                                type = "text" 
                                name = "schoolName"
                                value = {this.props.schoolName}
                                onChange = {this.handleChange}
                            />
                        </label>
                        <label>Title: 
                            <input 
                                type = "text" 
                                name = "studyTitle"
                                value = {this.props.studyTitle}
                                onChange = {this.handleChange}
                            />
                        </label>
                        <label>Start Date: 
                            <input 
                                type = "date" 
                                name = "studyStart"
                                value = {this.props.studyStart}
                                onChange = {this.handleChange}
                            />
                        </label>
                        <label>End Date: 
                            <input 
                                type = "date" 
                                name = "studyEnd"
                                value = {this.props.studyEnd}
                                onChange = {this.handleChange}
                            />
                        </label>
                        <input
                            type = "button"
                            value = "SUBMIT"
                            onClick = {this.props.submit}
                        />
                </form>
                <ul>
                    {educationList}
                </ul>
            </section>
        );
    }
}

export default Education