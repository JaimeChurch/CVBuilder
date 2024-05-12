import { useState } from 'react'

function Education(props) {

    const [education, setEducation] = useState({
        school: "",
        dates: "",
        degree: ""
    });

    const handleSchoolChange = (e) => {
        setEducation(previous => ({ ...previous, school: e.target.value }))
        props.onChange({ ...education, school: e.target.value })
    }
    const handleDatesChange = (e) => {
        setEducation(previous => ({ ...previous, dates: e.target.value }))
        props.onChange({ ...education, dates: e.target.value })
    }
    const handleDegreeChange = (e) => {
        setEducation(previous => ({ ...previous, degree: e.target.value }))
        props.onChange({ ...education, degree: e.target.value })
    }
    return (
        <div>
            <h2>Education</h2>
            <div>
                <label htmlFor="school">School</label>
                <input name="school" type="text" value={education.school} onChange={handleSchoolChange} />
            </div>
            <div>
                <label htmlFor="dates">Dates Attended</label>
                <input name="dates" type="text" value={education.dates} onChange={handleDatesChange} />
            </div>
            <div>
                <label htmlFor="degree">Degree</label>
                <input name="degree" type="text" value={education.degree} onChange={handleDegreeChange} />
            </div>
        </div>
    )
}

export default Education