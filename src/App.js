import React, { Component } from 'react';
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

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
      educationIndex: null,
      companyName: "",
      position: "",
      tasks: "",
      workStart: "",
      workEnd: "",
      experience: [{company: "F. Electronics", position: "Engineer", tasks: "Engineering stuff", start: "2013-07-08", end: "2017-12-15"}],
      experienceIndex: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleGeneralSubmit = this.handleGeneralSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.educationEdit = this.educationEdit.bind(this);
    this.educationEditSubmit = this.educationEditSubmit.bind(this);
    this.educationDelete = this.educationDelete.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
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
    const newEducation = this.state.education;
    this.setState({
      education: newEducation.concat([{
        name: this.state.schoolName,
        title: this.state.studyTitle,
        start: this.state.studyStart,
        end: this.state.studyEnd,
      }]),
      schoolName: "",
      studyTitle:"",
      studyStart:"",
      studyEnd:"",
    });
  }

  educationEdit(event){
    let index = parseInt(event.target.parentElement.id);
    let target = this.state.education[index];
    this.setState({
      educationIndex: index,
      schoolName: target.name,
      studyTitle: target.title,
      studyStart: target.start,
      studyEnd: target.end,
    });
  }

  educationEditSubmit(event){
    let index = parseInt(event.target.parentElement.id);
    const newEducation = this.state.education;
    const editedSchool = {
      name: this.state.schoolName,
      title: this.state.studyTitle,
      start: this.state.studyStart,
      end: this.state.studyEnd,
    }
    newEducation.splice(index,1,editedSchool)
    // console.log(newEducation);
    this.setState({
      education: newEducation,
      schoolName: "",
      studyTitle:"",
      studyStart:"",
      studyEnd:"",
      educationIndex: null,
    });
  }

  educationDelete(event){
    let index = parseInt(event.target.parentElement.id);
    const newEducation = this.state.education;
    newEducation.splice(index,1);
    this.setState({
      education: newEducation,
    });
  }

  handleExperienceSubmit(){
    const newExperience = this.state.experience;
    this.setState({
        experience: newExperience.concat([{
        company: this.state.companyName,
        position: this.state.position,
        tasks: this.state.tasks,
        start: this.state.workStart,
        end: this.state.workEnd,
      }]),
      companyName: "",
      position:"",
      tasks: "",
      workStart:"",
      workEnd:"",
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
          submit = {this.handleGeneralSubmit}
        />
        <Education
          onChange = {this.handleChange}
          schoolName = {this.state.schoolName}
          studyTitle = {this.state.studyTitle}
          studyStart = {this.state.studyStart}
          studyEnd = {this.state.studyEnd}
          education = {this.state.education}
          submit = {this.handleEducationSubmit}
          edit = {this.educationEdit}
          editIndex = {this.state.educationIndex}
          editSubmit = {this.educationEditSubmit}
          delete = {this.educationDelete}
        />
        <Experience
          onChange = {this.handleChange}
          companyName = {this.state.companyName}
          position = {this.state.position}
          tasks = {this.state.tasks}
          workStart = {this.state.workStart}
          workEnd = {this.state.workEnd}
          experience = {this.state.experience}
          submit = {this.handleExperienceSubmit}
        />
      </div>
    );
  }
}

export default App;
