import React, { Component } from 'react';

import CampusTable from './CampusTable'

let campuses = ['luna', 'terra', 'mars', 'titan']

export default class Home extends Component{
  constructor(){
    super()
    this.state = {
      selectedCampus: {},
      showStudents: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({showStudents: true})

  }



  render(){
  return (
   <div>
   <h1> home page</h1>
     <div className="campus-wrapper">
      {campuses.map(campus => {
        return(
           <div className= "campus"  onClick={this.handleClick}>
             <h2> campus </h2>
             <img src="https://d2ujflorbtfzji.cloudfront.net/key-image/c3c498a4-261b-4928-b282-48ea4ed12b12.png"/>
           </div>
       )}
      )}
   </div>
   <div className= "campus-table-wrapper">
       <CampusTable />
   </div>
 </div>
  )
}
}


