import React, { Component } from "react";

class General extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: "",
          email: "",
          phone: "",
          editGeneral: false,
        }
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event);
    }

    render(){
        if (this.props.editing) {            
            return(
                <section>
                    <form>
                        <h2>General Information: </h2>
                        <label>Name
                            <input 
                                type = "text" 
                                name = "name"
                                value = {this.props.name}
                                onChange = {this.handleChange}
                            />
                        </label>
                        <label>E-mail: 
                            <input 
                                type = "email" 
                                name = "email"
                                value = {this.props.email}
                                onChange = {this.handleChange}
                            />
                        </label>
                        <label>Phone number: 
                            <input 
                                type = "tel" 
                                name = "phone"
                                value = {this.props.phone}
                                onChange = {this.handleChange}
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
                                {this.props.name}                            
                            </p>
                        <h3>Email: </h3>
                            <p>
                                {this.props.email}
                            </p>
                        <h3>Phone: </h3>
                            <p>
                                {this.props.phone}
                            </p>
                    </div>
                </section>
            );
        }
    }
}

export default General