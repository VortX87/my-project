import React, { useState, useEffect } from 'react'
import '../App.css';

function SignUp() {

    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [tickedCheckbox, setTickedCheckbox] = useState(false)


    return (
        <div>
            <h1>Become a Member</h1>
        </div>,
        <div>
            <form className='form'>
                <p>Please enter your details for your membership</p>
                <div><input type='text' placeholder='Full Name' value={fullName} onChange={e => setFullName(e.target.value)} /></div>
                <div><input type='text' placeholder='Username' value={userName} onChange={e => setUserName(e.target.value)} /></div>
                <div><input type='text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} /></div>
                <div><input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} /></div>
                <label>
                    I confirm that I am over 18 years of age
                    <input type="checkbox" value={tickedCheckbox} onChange={e => setTickedCheckbox(true)} /><br></br>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>

    );
}

export default SignUp;