import React, { Component } from 'react';
import General from './components/General'
// import Education from './components/Education'
// import Experience from './components/Experience'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      editGeneral: true,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox'? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    this.setState({
      editGeneral: !this.state.editGeneral,
    });
  }

  render(){
    return (
      <div>
        <General
          onChange = {this.handleChange}
          editing = {this.state.editGeneral}
          name = {this.state.name}
          email = {this.state.email}
          phone = {this.state.phone}
          submit = {this.handleSubmit}
        />
        {/* <Education/>
        <Experience/> */}
      </div>
    );
  }
}

export default App;
