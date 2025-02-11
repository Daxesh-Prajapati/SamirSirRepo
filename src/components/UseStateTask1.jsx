import React, { useState } from 'react'

export const UseStateTask1 = () => {

  const [name, setname] = useState("")
  const [mobile, setmobile] = useState("")
  const [email, setemail] = useState("")
  const [date, setdate] = useState("")
  const [ticket, setticket] = useState("")

  const nameHolder = (event) => {
    console.log(event.target.value)
    setname(event.target.value)
  }

  return (
    <div style={{textAlign:"center"}}>
      <hr />
      <h1>Ticket Booking</h1>
      <div>
        <label >Name:</label>
        <input type="text" placeholder='Enter Name' onChange={(event)=>{nameHolder(event)}}></input>
        {name}
      </div>
      <div>
        <label >Contact No:</label>
        <input type="tel" placeholder='Enter contact Number' onChange={(event)=>{setmobile(event.target.value)}}></input>
        {mobile}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" placeholder='Enter email' onChange={(event)=>{setemail(event.target.value)}}></input>
        {email}
      </div>
      <div>
        <label>Date:</label>
        <input type="date" onChange={(event)=>{setdate(event.target.value)}}></input>
        {date}
      </div>
      <div>
        <label>Number of the Tickets : </label>
        <input type="text" onChange={(event)=>{setticket(event.target.value)}}></input>
        {ticket}
      </div>
    </div>
  )
}
