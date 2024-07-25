"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [disc, setdisc] = useState("")
  const [maintask, setmaintask] = useState([])


  const submithandler =(e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,disc}]);
    settitle("");
    setdisc("");
  }
  
  const deletehandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1);
    setmaintask(copytask);
  }
  let rendertask=<h2>No task is available</h2>
  if(maintask.length>0){
    rendertask = maintask.map((t,i)=>{
      return <div className="ipdata">
        <h3 >{i+1}. {t.title}</h3>
        <p >{t.disc}</p>
        <button onClick={()=>{
          deletehandler(i);
        }}>delete</button>
        
      </div>
    })
  }

 
  return (
    <>
    <h1 className="header">My To do list</h1>
    <form className='items' onSubmit={submithandler}>
      <input type='text' placeholder='Enter title Here' value={title} onChange={(e)=>{
        settitle(e.target.value);
      }}/>
      <input type='text' placeholder='Enter Description Here' value={disc} onChange={(e)=>{
        setdisc(e.target.value);
      }}/>
      <button className='btn'>Add Task</button>
    </form>
    <div className='items'>
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default page