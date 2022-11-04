import React, { useState, useEffect } from 'react'
import '../App.css';

function SignUp() {

    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    let handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost:5000/users/adduser", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname: fullName,
                username: userName,
                password: password,
                email: email
            }),
        });
        setFullName('')
        setEmail('')
        setPassword('')
        setUserName('')
        alert("Thank you for joining The Blackhole Retro Film Store ")
    }

    return (
        <div>
            <h1>Become a Member</h1>
        </div>,
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <p>Please enter your details for your membership</p>
                <div><input type='text' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
                <div><input type='text' placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} /></div>
                <div><input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                <div><input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                <div><button type='submit'>Submit</button></div>
            </form>
        </div>

    );
}

export default SignUp;