import React, { useState } from 'react'

export const UseStateTask2 = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [role, setrole] = useState("")
    const [password, setpassword] = useState("")
    const input = (email) => {
        setemail(email.target.value)
        console.log(email.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <hr />
        <h1>User Admin</h1>
        <div>
            <label>Name:</label>
            <input type="text" onChange={(event)=>{setname(event.target.value)}}></input>
            {name}
        </div>
        <div>
            <label>
                Email:
            </label>
            <input type="text" onChange={(email)=>{input(email)}}></input>
            {email}
        </div>
        <div>
            <label>Contact No:</label>
            <input type="tel" onChange={(event)=>{setmobile(event.target.value)}}></input>
            {mobile}
        </div>
        <div>
            <label>Role:</label>
            <select onChange={(event)=>{setrole(event.target.value)}}>
                <option value="Select Role ">Select Role </option>
                <option value="User">User</option>
                <option value="admin">Admin</option>
            </select>
            {role}
        </div>
        <div>
            <label>Password:</label>
            <input type="text"  onChange={(event)=>{setpassword(event.target.value)}}></input>
            {password}
        </div>
    </div>
  )
}
