import React from "react";

const General = props => {
    function handleChange(event){
        props.onChange(event);
    }
    if (props.editing){
        return(
            <section>
                <form>
                    <h2>General Information: </h2>
                    <label>Name
                        <input 
                            type = "text" 
                            name = "name"
                            value = {props.name}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>E-mail: 
                        <input 
                            type = "email" 
                            name = "email"
                            value = {props.email}
                            onChange = {handleChange}
                        />
                    </label>
                    <label>Phone number: 
                        <input 
                            type = "tel" 
                            name = "phone"
                            value = {props.phone}
                            onChange = {handleChange}
                        />
                    </label>
                </form>
            </section>
        );
    }else{
        return(
            <section>
                <h2>General Information: </h2>
                <div>
                    <h3>Name: </h3>
                        <p>
                            {props.name}                            
                        </p>
                    <h3>Email: </h3>
                        <p>
                            {props.email}
                        </p>
                    <h3>Phone: </h3>
                        <p>
                            {props.phone}
                        </p>
                </div>
            </section>
        );
    }
}

export default General