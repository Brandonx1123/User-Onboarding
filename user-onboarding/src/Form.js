import React from 'react'


export default function Form (props) {

    const {fname,lname,email,password,terms} =props

   
    
        return (
        <div className ='UserCard'>
        <p> First Name:{fname}</p>
        <p>Last Name:{lname}</p>
        <p> Email:{email}</p>
        <p> Password: {password}</p>
        <p>Terms of Service:{terms} </p>
        </div>
    )
        }

 // if (!details) { // if nothing is rendered from details this message will pop
    //     return <h3> Fetching Your Data</h3>