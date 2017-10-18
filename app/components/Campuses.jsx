import React from 'react'
import { Link } from 'react-router-dom';


export default function Campuses(props){
  // console.log(props)
// passing setCampus in here instead of using router so that we get a page refresh Link to is no longer needed I think
  return(

    <div className= "campuses">
    {props.campuses.map((campus) => {
      return (
        <div className="campus" onClick= {()=> props.setCampus(campus.id)} >
        <h1> {campus.name}  </h1>
          <img src="https://pbs.twimg.com/profile_images/665505233859174400/kA0u43JI.jpg"></img>

        </div>
      )
    })}
    </div>
  )
}


