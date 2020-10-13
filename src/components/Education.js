import React from "react";
import EditButton from "./EditButton";

const Education = props => {
    function handleChange(event){
        props.onChange(event);
    }

    let educationList = props.education.map((school, i)=>{
		// console.log(props.editIndex);
		// console.log(i);
        if(props.editIndex === i){
            return(
                <div key = {school.name+school.title} id = {i}>
                    <label>School Name: 
                        <input
                            type = "text" 
                            name = "schoolName"
                            value = {props.schoolName}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Title: 
                        <input
                            type = "text" 
                            name = "studyTitle"
                            value = {props.studyTitle}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Start Date: 
                        <input
                            type = "date" 
                            name = "studyStart"
                            value = {props.studyStart}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>End Date: 
                        <input 
                            type = "date" 
                            name = "studyEnd"
                            value = {props.studyEnd}
                            onChange = {handleChange}
                        />
                    </label>
                    <EditButton
                        type = "button"
                        value = "SUBMIT"
                        onClick = {props.editSubmit}
                        finished = {props.finished}
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
                    <EditButton
                        type = "button"
                        onClick = {props.edit} 
                        value = "EDIT"
                        finished = {props.finished}
                    />
                    <EditButton
                        type = "button"
                        onClick = {props.delete}
                        value = "DELETE"
                        finished = {props.finished}
                        />
                </li>
                // <li>{school.name+", "+school.title}</li>
            );
        }
    })
    if(props.editIndex === null && !props.finished){
        return(
            <section>
                <form>
                    <h2>Education</h2>
                    <ul>
                        {educationList}
                    </ul>
                        <label>School Name: 
                            <input
                                type = "text" 
                                name = "schoolName"
                                value = {props.schoolName}
                                onChange = {handleChange}
                            />
                        </label>
                        <label>Title: 
                            <input
                                type = "text" 
                                name = "studyTitle"
                                value = {props.studyTitle}
                                onChange = {handleChange}
                            />
                        </label>
                        <label>Start Date: 
                            <input
                                type = "date" 
                                name = "studyStart"
                                value = {props.studyStart}
                                onChange = {handleChange}
                            />
                        </label>
                        <label>End Date: 
                            <input 
                                type = "date" 
                                name = "studyEnd"
                                value = {props.studyEnd}
                                onChange = {handleChange}
                            />
                        </label>
                        <EditButton
                            type = "button"
                            value = "SUBMIT"
                            onClick = {props.submit}
                            finished = {props.finished}
                        />
                </form>
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

export default Education