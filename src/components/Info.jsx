import { useState, useEffect } from 'react'

function Info(props) {

    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleNameChange = (e) => {
        setInfo(previous => ({ ...previous, name: e.target.value }))
        props.onChange({ ...info, name: e.target.value })
    }
    const handleEmailChange = (e) => {
        setInfo(previous => ({ ...previous, email: e.target.value }))
        props.onChange({ ...info, email: e.target.value })
    }
    const handlePhoneChange = (e) => {
        setInfo(previous => ({ ...previous, phone: e.target.value }))
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
        </div>
    )
}

export default Info