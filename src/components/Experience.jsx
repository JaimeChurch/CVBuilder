import { useState } from 'react'

function Experience(props) {

    const [experience, setExperience] = useState({
        employer: "",
        dates: "",
        position: "",
        description: ""
    });

    const handleEmployerChange = (e) => {
        setExperience(previous => ({ ...previous, employer: e.target.value }))
        props.onChange({ ...experience, employer: e.target.value })
    }
    const handleDatesChange = (e) => {
        setExperience(previous => ({ ...previous, dates: e.target.value }))
        props.onChange({ ...experience, dates: e.target.value })
    }
    const handlePositionChange = (e) => {
        setExperience(previous => ({ ...previous, position: e.target.value }))
        props.onChange({ ...experience, position: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setExperience(previous => ({ ...previous, description: e.target.value }))
        props.onChange({ ...experience, description: e.target.value })
    }

    return (
        <div>
            <h2>Experience</h2>
            <div>
                <label htmlFor="employer">Employer</label>
                <input name="employer" type="text" class="input" value={experience.employer} onChange={handleEmployerChange} />
            </div>
            <div>
                <label htmlFor="dates">Dates Employed</label>
                <input name="dates" type="text" class="input" value={experience.dates} onChange={handleDatesChange} />
            </div>
            <div>
                <label htmlFor="position">Position</label>
                <input name="position" type="text" class="input" value={experience.position} onChange={handlePositionChange} />
            </div>
            <div class="inputContainer">
                <label htmlFor="description">Description</label>
                <textarea name="description" type="text" class="descriptionInput" value={experience.description} onChange={handleDescriptionChange} />
            </div>
        </div>
    )
}

export default Experience