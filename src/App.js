import React, { Component } from 'react';
import General from './components/General'
import Education from './components/Education'
// import Experience from './components/Experience'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      editGeneral: true,
      schoolName: "",
      studyTitle: "",
      studyStart: "",
      studyEnd: "",
      education: [{name:"ITH", title: "Mechatronics", start: "2013-07-08", end: "2017-12-15"}],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleGeneralSubmit = this.handleGeneralSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox'? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleGeneralSubmit(event){
    this.setState({
      editGeneral: !this.state.editGeneral,
    });
  }

  handleEducationSubmit(){
    let newEducation = this.state.education;
    this.setState({
      education: newEducation.concat([{
        name: this.state.schoolName,
        title: this.state.studyTitle,
        start: this.state.studyStart,
        end: this.state.studyEnd,
      }]),
    },()=>console.log(this.state.education));
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
          submit = {this.handleGeneralSubmit}
        />
        <Education
          onChange = {this.handleChange}
          schoolName = {this.schoolName}
          studyTitle = {this.studyTitle}
          studyStart = {this.studyStart}
          studyEnd = {this.studyEnd}
          education = {this.state.education}
          submit = {this.handleEducationSubmit}
        />
        {/* <Experience/> */}
      </div>
    );
  }
}

export default App;
