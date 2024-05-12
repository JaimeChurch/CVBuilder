import { useState } from 'react';
import './styles/style.css';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [info, setInfo] = useState({
    name: "John Dough",
    email: "doughboy@gmail.com",
    phone: "(555) 555-5555"
  });

  const [education, setEducation] = useState({
    school: "Harvard Law",
    dates: "1901 - 2019 ",
    degree: "Basketweaving"
  });

  const [experience, setExperience] = useState({
    employer: "Microsoft",
    dates: "1988 - 1988",
    position: "Research and Development",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede."
  });

  const [submittedInfo, setSubmittedInfo] = useState(null);
  const [submittedEducation, setSubmittedEducation] = useState(null);
  const [submittedExperience, setSubmittedExperience] = useState(null);

  const [editingInfo, setEditingInfo] = useState({ ...info });
  const [editingEducation, setEditingEducation] = useState({ ...education });
  const [editingExperience, setEditingExperience] = useState({ ...experience });

  const handleInfoChange = (update) => {
    setEditingInfo(update);
  };

  const handleEducationChange = (update) => {
    setEditingEducation(update);
  };

  const handleExperienceChange = (update) => {
    setEditingExperience(update);
  };

  const handleInfoSubmit = () => {
    setSubmittedInfo(editingInfo);
  };

  const handleEducationSubmit = () => {
    setSubmittedEducation(editingEducation);
  };

  const handleExperienceSubmit = () => {
    setSubmittedExperience(editingExperience);
  };

  return (
    <div id='container'>
      <div id='title'>
        <h1>Resume Maker</h1>
      </div>

      <div id='panels'>

        <div id='leftPanel'>
          <Info onChange={handleInfoChange} initialValues={editingInfo}></Info>
          <button onClick={handleInfoSubmit}>Submit Info</button>
          <Education onChange={handleEducationChange} initialValues={editingEducation}></Education>
          <button onClick={handleEducationSubmit}>Submit Education</button>
          <Experience onChange={handleExperienceChange} initialValues={editingExperience}></Experience>
          <button onClick={handleExperienceSubmit}>Submit Experience</button>
        </div>

        <div id='rightPanel'>
          <table id='resume'>
            <tbody>
              <tr>
                <td><h1>{submittedInfo ? submittedInfo.name : info.name}</h1></td>
              </tr>
              <tr>
                <td>{submittedInfo ? submittedInfo.email : info.email}</td>
              </tr>
              <tr>
                <td>{submittedInfo ? submittedInfo.phone : info.phone}</td>
              </tr>
              <tr>
                <td><h2>Education</h2></td>
              </tr>
              <tr>
                <td>{submittedEducation ? submittedEducation.dates : education.dates}</td>
                <td>{submittedEducation ? submittedEducation.school : education.school}</td>
              </tr>
              <tr>
                <td></td><td>{submittedEducation ? submittedEducation.degree : education.degree}</td>
              </tr>
              <tr>
                <td><h2>Experience</h2></td>
              </tr>
              <tr>
                <td>{submittedExperience ? submittedExperience.dates : experience.dates}</td>
                <td>{submittedExperience ? submittedExperience.employer : experience.employer}</td>
              </tr>
              <tr>
                <td></td>
                <td>{submittedExperience ? submittedExperience.position : experience.position}</td>
              </tr>
              <tr>
                <td></td>
                <td>{submittedExperience ? submittedExperience.description : experience.description}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default App;
