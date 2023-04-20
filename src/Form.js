


import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("")
    const [sport,setSport]=useState("")
    const handleSubmit=()=>{
        document.write(`My name is ${name}, I like to play ${sport}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p><label>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/></p>
            <p>
            <label>Sport</label>
            <select value={sport} onChange={(e1)=>setSport(e1.target.value)} >
                <option value="Basketball">Basketball</option>
                <option value="Badminton">Badminton</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Handball">Handball</option>
                <option value="Hockey">Hockey</option>
                <option value="Throwball">Throwball</option>
            </select>
            </p>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default Form