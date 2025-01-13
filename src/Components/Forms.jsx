import React, { useState } from 'react'
import './forms.css'
const Forms = () => {
    const [UserName, setUser] = useState('')
    const [UserEmail, setEmail] = useState('')
    const [UserPassword, setPassword] = useState('')

    function UserNameHandler(event) {
        setUser(event.target.value)
        // console.log(event.target.value)
    }
    function UserEmailHandler(event) {
        setEmail(event.target.value)
        // console.log(event.target.value)
    }
    function UserPasswordHandler(event) {
        setPassword(event.target.value)
        // console.log(event.target.value)
    }
    function response(event) {
        event.preventDefault();

        const AllData ={
            user:UserName,
            email:UserEmail,
            password:UserPassword
        }
        console.log(AllData)
        setUser('')
        setEmail('')
        setPassword('')
    }
    
  return (
    <div>
     <form onSubmit={response}>
        <div className="main">
            <h2>Login,</h2><br />
            <label>User Name</label>
            <input type="text" value={UserName} onChange = {UserNameHandler}/>
            <br />
            <br />
            <label>Email</label>
            <input type="Email" value={UserEmail} onChange = {UserEmailHandler}/>
            <br />
            <br />
            <label>Password</label>
            <input type="Password" value={UserPassword} onChange = {UserPasswordHandler}/>
            <br />
            <br />
            <button>Submit</button>
        </div>
     </form>
    </div>
  )
}

export default Forms
