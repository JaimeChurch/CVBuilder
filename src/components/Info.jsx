import { useState } from 'react'

function Info(props) {

    const [info, setEditor] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleNameChange = (e) => {
        setEditor(previous => ({ ...previous, name: e.target.value }))
        props.onChange({ ...info, name: e.target.value })
    }
    const handleEmailChange = (e) => {
        setEditor(previous => ({ ...previous, email: e.target.value }))
        props.onChange({ ...info, email: e.target.value })
    }
    const handlePhoneChange = (e) => {
        setEditor(previous => ({ ...previous, phone: e.target.value }))
        props.onChange({ ...info, phone: e.target.value })
    }

    return (
        <div>
            <h2>Personal Information</h2>
            <div>
                <label htmlFor="name">Full Name</label>
                <input name="name" type="text" value={info.name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" value={info.email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input name="phone" type="text" value={info.phone} onChange={handlePhoneChange} />
            </div>

            <h2>Education</h2>
        </div>
    )
}

export default Info