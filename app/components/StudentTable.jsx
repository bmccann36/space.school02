import React, { Component } from 'react';
import axios from 'axios';

export default class StudentTable extends Component{
  constructor(props){
    super(props)
    this.state = { selectedStudent: {}, allStudents: [] }
    this.deleteStudent = this.deleteStudent.bind(this)
  }

 deleteStudent(studentId){
    axios.delete(`/api/students/${studentId}/delete`)
    .then(res => res.data)
    .then(deleted => {
      console.log(deleted)
    })

  }




  render() {
    // console.log(this.props)
    let students
    if (this.props.students) {
      students = this.props.students.map((student => {
        return (
          <tr key={student.id}>
            <td> {student.name} </td>
            <td> {student.email} </td>
            <td> {student.gpa} </td>
            <td>
              <button onClick={() => this.deleteStudent(student.id)}> delete entry </button>
            </td>
          </tr>
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


