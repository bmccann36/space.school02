
import axios from 'axios';
import React, { Component } from 'react';

export default class CampusTable extends Component {
  constructor() {
    super()
    this.state = { students:[] }
    }

    componentDidMount(){
      axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
          console.log(students)
        })
    }


    render(){
    //   if (props.students){
    //     students = props.students.map((student => {
    //      return (
    //        <tr>
    //          <td> {student.name} </td>
    //          <td> {student.email} </td>
    //          <td> {student.gpa} </td>
    //        </tr>
    //      )
    //    }))
    //  }
    return (
      <div className= "campus-table">
      <h1> a table will go here </h1>
      </div>
    )
  }
}

