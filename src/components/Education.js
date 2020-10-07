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
        let educationList = this.props.education.map((school, i)=>{
		// console.log(this.props.editIndex);
		// console.log(i);
			if(this.props.editIndex === i){
				return(
					<div key = {school.name+school.title} id = {i}>
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
                            onClick = {this.props.editSubmit}
                        />
                </div>
				);
			}else{
				return(
					<li key = {school.name+school.title} id = {i}>
						<p>
							{`Institution: ${school.name}, 
							Title: ${school.title}, 
							Start Date: ${school.start}
							End Date: ${school.end} `}
						</p>
						<button onClick = {this.props.edit}>EDIT</button>
						<button onClick = {this.props.delete}>DELETE</button>
					</li>
					// <li>{school.name+", "+school.title}</li>
				);
			}
		})
        if(this.props.editIndex === null){
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
	}else{ 
        return(
            <section>
                <form>
                    <h2>Education</h2>
                    <ul>
                        {educationList}
                    </ul>
                </form>
            </section>
        );
    }
    }
}

export default Education