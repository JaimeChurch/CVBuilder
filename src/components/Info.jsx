import { useState } from 'react'

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
                <input name="name" type="text" onChange={handleNameChange} class="input" value={info.name} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" onChange={handleEmailChange} class="input" value={info.email} />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input name="phone" type="text" onChange={handlePhoneChange} class="input" value={info.phone} />
            </div>
        </div>
    )
}

export default Info