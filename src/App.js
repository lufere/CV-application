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
      finished: false,
      finishedStatus: "FINISH EDITING",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.educationEdit = this.educationEdit.bind(this);
    this.educationEditSubmit = this.educationEditSubmit.bind(this);
    this.educationDelete = this.educationDelete.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
    this.experienceEdit = this.experienceEdit.bind(this);
    this.experienceEditSubmit = this.experienceEditSubmit.bind(this);
    this.experienceDelete = this.experienceDelete.bind(this);
    this.finishToggle = this.finishToggle.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox'? target.checked : target.value;

    this.setState({
      [name]: value,
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

  experienceEdit(event){
    let index = parseInt(event.target.parentElement.id);
    let target = this.state.experience[index];
    this.setState({
      experienceIndex: index,
      companyName: target.company,
      position: target.position,
      tasks: target.tasks,
      workStart: target.start,
      workEnd: target.end,
    });
  }

  experienceEditSubmit(event){
    let index = parseInt(event.target.parentElement.id);
    const newExperience = this.state.experience;
    const editedWork = {
      company: this.state.companyName,
      position: this.state.position,
      tasks: this.state.tasks,
      start: this.state.workStart,
      end: this.state.workEnd,
    }
    newExperience.splice(index,1,editedWork)
    // console.log(newEducation);
    this.setState({
      experience: newExperience,
      companyName: "",
      position:"",
      tasks:"",
      workStart:"",
      workEnd:"",
      experienceIndex: null,
    });
  }

  experienceDelete(event){
    let index = parseInt(event.target.parentElement.id);
    const newExperience = this.state.experience;
    newExperience.splice(index,1);
    this.setState({
      experience: newExperience,
    });
  }

  finishToggle(){
    if(this.state.finishedStatus === "FINISH EDITING")this.setState({
      finished: !this.state.finished,
      finishedStatus: "EDIT CV",
      editGeneral: false,
      experienceIndex: null,
      educationIndex: null,
      schoolName: "",
      studyTitle:"",
      studyStart:"",
      studyEnd:"",
      companyName: "",
      position:"",
      tasks:"",
      workStart:"",
      workEnd:"",
    })
    if(this.state.finishedStatus === "EDIT CV")this.setState({
      finished: !this.state.finished,
      finishedStatus: "FINISH EDITING",
      editGeneral: true,
    })
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
          finished = {this.state.finished}
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
          edit = {this.experienceEdit}
          editIndex = {this.state.experienceIndex}
          editSubmit = {this.experienceEditSubmit}
          delete = {this.experienceDelete}
          finished = {this.state.finished}
        />
        <input
          type = "button"
          value = {this.state.finishedStatus}
          className = "finishEdit"
          onClick = {this.finishToggle}
        />
      </div>
    );
  }
}

export default App;
