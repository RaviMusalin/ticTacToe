import React, { useState } from 'react'

function SignUp() {
    const [user, setUser] = useState(null)

    const signUp = () => {}
  return (
    <div className="signUp">
        <label>Sign Up</label>

        <input placeholder='First Name' 
        onChange={(event) => {
            setUser({...user, firstName: event.target.value })
        }}></input>

        <input placeholder='Last Name' 
        onChange={(event) => {
            setUser({...user, lastName: event.target.value })
        }}></input>

        <input placeholder='Username' 
        onChange={(event) => {
            setUser({...user, username: event.target.value })
        }}></input>

        <input placeholder='Password' 
        onChange={(event) => {
            setUser({...user, password: event.target.value })
        }}></input>
            <button onClick={signUp}> Sign Up </button>
    </div>
  )
}

export default SignUp