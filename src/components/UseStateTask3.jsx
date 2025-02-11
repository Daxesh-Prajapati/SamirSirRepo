import React, { useState } from 'react'

export const UseStateTask3 = () => {
    const [name, setname] = useState("")
    const [role, setrole] = useState("")
    const [age, setage] = useState("")
    const [mobile, setmobile] = useState("")
    const [date, setdate] = useState("")
    
  return (
    <div style={{textAlign:"center"}}>
        <hr />
        <h1>Blood Donation</h1>
        <div>
            <label>Name:</label>
            <input type="text" onChange={(event)=>{setname(event.target.value)}}></input>
            {name}
        </div>
        <div>
            <label>Role:</label>
            <select onChange={(event)=>{setrole(event.target.value)}}>
                <option value="Select Blood Group">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            {role}
        </div>
        <div>
            <label>Age:</label>
            <input type="text" onChange={(event)=>{setage(event.target.value)}}></input>
            {age}
        </div>
        <div>
            <label>Contact No:</label>
            <input type="tel" onChange={(event)=>{setmobile(event.target.value)}}></input>
            {mobile}
        </div>
        <div>
        <label>Last Donation Date:</label>
        <input type="date" onChange={(event)=>{setdate(event.target.value)}}></input>
        {date}
      </div>
    </div>
  )
}
