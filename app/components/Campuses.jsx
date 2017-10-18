import React from 'react'
import { Link } from 'react-router-dom';


export default function Campuses(props){
  console.log(props)
// passing setCampus in here instead of using router so that we get a page refresh Link to is no longer needed I think
  return(

    <div className= "campuses">
    {props.campuses.map((campus) => {
      return (
        <div className="campus" onClick= {()=> props.setCampus(campus.id)} >
        {/* <Link to= {`/campus/${campus.id}/students`}> */}

        <h1> {campus.name}  </h1>
          <img src="https://pbs.twimg.com/profile_images/665505233859174400/kA0u43JI.jpg"></img>
          {/* </Link> */}
        </div>
      )
    })}
    </div>
  )
}


// href= "https://www.warnerbros.com/archive/spacejam/movie/jam.htm"

{/* <img class="irc_mi" src="https://pbs.twimg.com/profile_images/665505233859174400/kA0u43JI.jpg" alt="Image result for bear" onload="typeof google==='object'&amp;&amp;google.aft&amp;&amp;google.aft(this)" width="256" height="256" style="margin-top: 69px;"> */}


        {/* <button onClick= {()=> console.log('you clicked')} > show students </button> */}
