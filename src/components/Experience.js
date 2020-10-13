import React from "react";
import EditButton from "./EditButton";

const Experience = props => {
    function handleChange(event){
        props.onChange(event);
    }

    let experienceList = props.experience.map((work, i)=>{
        if(props.editIndex === i){
            return(
                <div key = {work.name+work.title} id = {i}>
                    <label>Company Name: 
                        <input
                            type = "text" 
                            name = "companyName"
                            value = {props.companyName}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Title: 
                        <input
                            type = "text" 
                            name = "position"
                            value = {props.position}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Tasks/Responsibilities: 
                        <textarea
                            name = "tasks"
                            value = {props.tasks}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Start Date: 
                        <input
                            type = "date" 
                            name = "workStart"
                            value = {props.workStart}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>End Date: 
                        <input 
                            type = "date" 
                            name = "workEnd"
                            value = {props.workEnd}
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
            }
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
                <EditButton 
                    onClick = {props.edit}
                    value = "EDIT"
                    type = "button"
                    finished = {props.finished}
                />
                <EditButton 
                    onClick = {props.delete}
                    value = "DELETE"
                    type = "button"
                    finished = {props.finished}
                />
            </li>
            // <li>{school.name+", "+school.title}</li>
        );
    })
    
    if(props.editIndex === null && !props.finished){
        return(
            <section>
            <form>
                <h2>Experience</h2>
                <ul>
                    {experienceList}
                </ul>
                    <label>Company Name: 
                        <input
                            type = "text" 
                            name = "companyName"
                            value = {props.companyName}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Title: 
                        <input
                            type = "text" 
                            name = "position"
                            value = {props.position}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Tasks/Resposibilities: 
                        <textarea
                            name = "tasks"
                            value = {props.tasks}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Start Date: 
                        <input 
                            type = "date" 
                            name = "workStart"
                            value = {props.workStart}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>End Date: 
                        <input 
                            type = "date" 
                            name = "workEnd"
                            value = {props.workEnd}
                            onChange = {handleChange}
                        />
                    </label>
                    <input
                        type = "button"
                        value = "SUBMIT"
                        onClick = {props.submit}
                    />
            </form>
        </section>
    );
    }else{
        return(
            <section>
                <form>
                    <h2>Experience</h2>
                    <ul>
                        {experienceList}
                    </ul>
                </form>
            </section>
        );
    }
}

export default Experience