import React, { Component } from "react";

class Experience extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event);
    }

    render(){
        let experienceList = this.props.experience.map((work, i)=>{
            return(
                <li key = {work.company+work.position} id = {i}>
                    <p>
                        {
                        `Company Name: ${work.company}, 
                        Title: ${work.position},
                        Tasks/Responsibilities: ${work.tasks} ,
                        Start Date: ${work.start}
                        End Date: ${work.end} `
                        }
                    </p>
                    <button onClick = {this.props.edit}>EDIT</button>
                    <button onClick = {this.props.delete}>DELETE</button>
                </li>
                // <li>{school.name+", "+school.title}</li>
            );
        })
        return(
            <section>
            <form>
                <h2>Experience</h2>
                    <label>Company Name: 
                        <input
                            type = "text" 
                            name = "companyName"
                            value = {this.props.companyName}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <label>Title: 
                        <input
                            type = "text" 
                            name = "position"
                            value = {this.props.position}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <label>Tasks/Resposibilities: 
                        <textarea
                            name = "tasks"
                            value = {this.props.tasks}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <label>Start Date: 
                        <input 
                            type = "date" 
                            name = "workStart"
                            value = {this.props.workStart}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <label>End Date: 
                        <input 
                            type = "date" 
                            name = "workEnd"
                            value = {this.props.workEnd}
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
                {experienceList}
            </ul>
        </section>
            // {/* <section>
            //     <form>
            //         <h2>Experience</h2>
            //         <label for = "companyName">Company Name</label>
            //         <input type = "text" id = "companyName" name = "companyName"></input>
            //         <label for = "position">Position</label>
            //         <input type = "text" id = "position" name = "position"></input>
            //         <label for = "tasks">Tasks/Resposibilities</label>
            //         <textarea id = "tasks" name = "tasks"></textarea>
            //         <label for = "workStart">Start Date</label>
            //         <input type = "date" id = "workStart" name = "workStart"></input>
            //         <label for = "workEnd">End Date</label>
            //         <input type = "date" id = "workEnd" name = "workEnd"></input>
            //         <input type = "button" value = "SUBMIT"></input>
            //     </form>
            // </section> */}
        );
    }
}

export default Experience