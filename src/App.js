import React, { useState } from 'react';
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

// class App extends Component{
const App = props =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editGeneral, setEditGeneral] = useState(true);
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyStart, setStudyStart] = useState("");
  const [studyEnd, setStudyEnd] = useState("");
  const [education, setEducation] = useState([{name:"ITH", title: "Mechatronics", start: "2013-07-08", end: "2017-12-15"}]);
  const [educationIndex, setEducationIndex] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [workStart, setWorkStart] = useState("");
  const [workEnd, setWorkEnd] = useState("");
  const [experience, setExperience] = useState([{company: "F. Electronics", position: "Engineer", tasks: "Engineering stuff", start: "2013-07-08", end: "2017-12-15"}]);
  const [experienceIndex, setExperienceIndex] = useState(null);
  const [finished, setFinished] = useState(false);
  const [finishedStatus, setFinishedStatus] = useState("FINISH EDITING");

  function handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox'? target.checked : target.value;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'schoolName')setSchoolName(value);
    if (name === 'studyTitle')setStudyTitle(value);
    if (name === 'studyStart')setStudyStart(value);
    if (name === 'studyEnd')setStudyEnd(value);
    if (name === 'companyName')setCompanyName(value);
    if (name === 'position')setPosition(value);
    if (name === 'tasks')setTasks(value);
    if (name === 'workStart')setWorkStart(value);
    if (name === 'workEnd')setWorkEnd(value);
    // this.setState({
    //   [name]: value,
    // });
  }

  function handleEducationSubmit(){
    const newEducation = education;
    setEducation(newEducation.concat([{
      name: schoolName,
      title: studyTitle,
      start: studyStart,
      end: studyEnd,
    }]));
    setSchoolName('');
    setStudyTitle('');
    setStudyStart('');
    setStudyEnd('');
  }

  function educationEdit(event){
    let index = parseInt(event.target.parentElement.id);
    let target = education[index];
    setEducationIndex(index);
    setSchoolName(target.name);
    setStudyTitle(target.title);
    setStudyStart(target.start);
    setStudyEnd(target.end);
  }

  function educationEditSubmit(event){
    let index = parseInt(event.target.parentElement.id);
    const newEducation = [...education];
    const editedSchool = {
      name: schoolName,
      title: studyTitle,
      start: studyStart,
      end: studyEnd,
    }
    newEducation.splice(index,1,editedSchool)
    // console.log(newEducation);
    setEducation(newEducation);
    setSchoolName('');
    setStudyTitle('');
    setStudyStart('');
    setStudyEnd('');
    setEducationIndex(null);
  }

  function educationDelete(event){
    console.log(editGeneral);
    let index = parseInt(event.target.parentElement.id);
    const newEducation = [...education];
    newEducation.splice(index,1);
    console.log(newEducation);
    setEducation(newEducation);
  }

  function handleExperienceSubmit(){
    const newExperience = experience;
    setExperience(newExperience.concat([{
      company: companyName,
      position: position,
      tasks: tasks,
      start: workStart,
      end: workEnd,
    }]));
    setCompanyName('');
    setPosition('');
    setTasks('');
    setWorkStart('');
    setWorkEnd('');
  }

  function experienceEdit(event){
    let index = parseInt(event.target.parentElement.id);
    let target = experience[index];
    setExperienceIndex(index);
    setCompanyName(target.company);
    setPosition(target.position);
    setTasks(target.tasks);
    setWorkStart(target.workStart);
    setWorkEnd(target.workEnd);
  }

  function experienceEditSubmit(event){
    let index = parseInt(event.target.parentElement.id);
    const newExperience = [...experience];
    const editedWork = {
      company: companyName,
      position: position,
      tasks: tasks,
      start: workStart,
      end: workEnd,
    }
    newExperience.splice(index,1,editedWork)
    // console.log(newEducation);
    setExperience(newExperience);
    setCompanyName('');
    setPosition('');
    setTasks('');
    setWorkStart('');
    setWorkEnd('');
    setExperienceIndex(null);
  }

  function experienceDelete(event){
    let index = parseInt(event.target.parentElement.id);
    const newExperience = [...experience];
    newExperience.splice(index,1);
    setExperience(newExperience);
  }

  function finishToggle(){
    console.log(finishedStatus);
    if(finishedStatus === "FINISH EDITING"){
      setFinished(!finished);
      setFinishedStatus('EDIT CV');
      setEditGeneral(false);
      setExperienceIndex(null);
      setEducationIndex(null);
      setSchoolName('');
      setStudyTitle('');
      setStudyStart('');
      setStudyEnd('');
      setCompanyName('');
      setPosition('');
      setTasks('');
      setWorkStart('');
      setWorkEnd('');
    }
    if(finishedStatus === "EDIT CV"){
      setFinished(!finished);
      setFinishedStatus('FINISH EDITING');
      setEditGeneral(true);
    }
  }

  return (
    <div>
      <General
        onChange = {handleChange}
        editing = {editGeneral}
        name = {name}
        email = {email}
        phone = {phone}
      />
      <Education
        onChange = {handleChange}
        schoolName = {schoolName}
        studyTitle = {studyTitle}
        studyStart = {studyStart}
        studyEnd = {studyEnd}
        education = {education}
        submit = {handleEducationSubmit}
        edit = {educationEdit}
        editIndex = {educationIndex}
        editSubmit = {educationEditSubmit}
        delete = {educationDelete}
        finished = {finished}
      />
      <Experience
        onChange = {handleChange}
        companyName = {companyName}
        position = {position}
        tasks = {tasks}
        workStart = {workStart}
        workEnd = {workEnd}
        experience = {experience}
        submit = {handleExperienceSubmit}
        edit = {experienceEdit}
        editIndex = {experienceIndex}
        editSubmit = {experienceEditSubmit}
        delete = {experienceDelete}
        finished = {finished}
      />
      <input
        type = "button"
        value = {finishedStatus}
        className = "finishEdit"
        onClick = {finishToggle}
      />
    </div>
  );
}

export default App;
