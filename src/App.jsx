import { useState } from 'react'
import './styles/style.css'
import Info from './components/Info'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const handleInfoChange = (update) => {
    setInfo(update)
  }

  const [education, setEducation] = useState({
    school: "",
    dates: "",
    degree: ""
  });
  const handleEducationChange = (update) => {
    setEducation(update)
  }

  const [experience, setExperience] = useState({
    employer: "",
    dates: "",
    position: "",
    description: ""
  });
  const handleExperienceChange = (update) => {
    setExperience(update)
  }

  return (
    <div id='container'>
      <div id='title'>
        <h1>Resume Maker</h1>
      </div>

      <div id='panels'>

        <div id='leftPanel'>
          <Info onChange={handleInfoChange}></Info>
          <Education onChange={handleEducationChange}></Education>
          <Experience onChange={handleExperienceChange}></Experience>
        </div>

        <div id='rightPanel'>
          <div id='infoBlock'>



          </div>
          <table id='resume'>
            <tr>
              <td><h1>{info.name}</h1></td>
            </tr>
            <tr>
              <td>{info.email}</td>
            </tr>
            <tr>
              <td>{info.phone}</td>
            </tr>
            <tr>
              <td><h2>Education</h2></td>
            </tr>
            <tr>
              <td>{education.dates}</td>
              <td>{education.school}</td>
            </tr>
            <tr>
              <td></td><td>{education.degree}</td>
            </tr>
            <tr><h2>Experience</h2></tr>
            <tr>
              <td>{experience.dates}</td>
              <td>{experience.employer}</td>
            </tr>
            <tr>
              <td></td>
              <td>{experience.position}</td>
            </tr>
            <tr>
              <td></td>
              <td>{experience.description}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
