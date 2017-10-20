import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class SingleCampus extends Component {
  constructor(props) {
    super(props)
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
    const students = this.props.students.filter( student => {
      return student.campusId == this.props.campusId
    })

    const display = students.map(student => {
      return (
        <div key={student.id}>
        <Link to = {`/students/${student.id}`}> {student.name} </Link>
        </div>
      )})
        console.log(campus)
  return (

    <div className= "single-campus-display">
      { campus &&
      <div>
     <h1> {campus.name} </h1>
     {display}
     </div>
      }
     </div>

  )

  }
}
