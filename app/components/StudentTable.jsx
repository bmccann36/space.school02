import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class StudentTable extends Component{
  constructor(props){
    super(props)
    // this.state = { selectedStudent: {},
    //               allStudents: this.props.students
    //               }
  }



  render() {
    // console.log('student table render ')
    let students
    if (this.props.students) {
      students = this.props.students.map((student => {
        return (
          <div key={student.id} >
            <tr>
              <Link to = {`/students/${student.id}`}> show info </Link>
              <h1> {student.name} </h1>
              <td>
                <button onClick={() => this.props.deleteStudent(student.id)}> delete entry </button>
              </td>
           </tr>
          </div>
        )
      }))
      return (
        <div className="students-table">

          {students && <div>
            {students}
          </div>}
        </div>
      )
    }
  }
}


