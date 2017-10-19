import React from 'react'
// import { Link } from 'react-router-dom';


export default function Campuses(props){



  return(

    <div className="campuses-display">

    {props.campuses.map((campus) => {
      return (
        <div className="campus-icon" key={campus.id} onClick= {()=> props.setCampus(campus.id)} >
        <p> {campus.name}  </p>
          <img src={campus.image|| "http://i.imgur.com/6jr3M0j.png"}></img>
       </div>
      )
    })}
    </div>
  )
}


