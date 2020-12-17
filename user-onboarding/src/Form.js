import React from 'react'


export default function Form (props) {

    const {details} =props

    if (!details) { // if nothing is rendered from details this message will pop
        return <h3> Fetching Your Data</h3>
    }
        return (
        <div className ='UserCard'>
        <p> First Name:{details.fname}</p>
        <p>Last Name:{details.lname}</p>
        <p> Email:{details.email}</p>
        <p> Password: {details.password}</p>
        <p>Terms of Service:{details.terms} </p>
        </div>
    )
}