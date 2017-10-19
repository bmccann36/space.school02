import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class SingleCampus extends Component {
  constructor() {
    super()
    this.state = {
      campus: {}
    }
  }

  componentDidMount(){
    const thisCampus = this.props.campuses.filter( campus => {
      return campus.id == this.props.selectedCampus
    })
    // console.log(thisCampus, 'campus Id')
  }


  render(){
    // console.log(this.props)
   const campus = this.props.campuses.filter( campus => {
      return campus.id == this.props.campusId})[0]

    console.log(campus, "this campus")
    const students = this.props.students
  return (
    <div className= "single-campus-display">
      <h1> {campus.name} </h1>
      {students.map((student) => {
        return (
          <div key={student.id}>
          <Link to = "/students"> {student.name} </Link>
          </div>
        )
      })}
    </div>
  )
}
}
