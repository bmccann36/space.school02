import React, { Component } from 'react';
import axios from 'axios';


import StudentTable from '../components/StudentTable'
import AddPerson from '../components/AddPerson'

export default class StudentsContainer extends Component {
  constructor() {
    super()
    this.state = {
      showForm: false,
      visibleStudents: []
     }
     this.handleClick = this.handleClick.bind(this)
     this.deleteStudent = this.deleteStudent.bind(this)
    }


    componentDidMount(){
      axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({visibleStudents: students})
      })
    }


    deleteStudent(studentId){
      const prevStuds = this.state.visibleStudents
      axios.delete(`api/students/${studentId}/delete`)
      const currStuds = prevStuds.filter(student => {
        return student.id !== studentId })

      this.setState({visibleStudents: currStuds})
  }

  handleClick(){
      this.setState({showForm: true})
  }


  render() {
      return (
        <div>
          <button onClick = { this.handleClick}> click to edit </button>
            <div className= "students-container" >
                 <StudentTable students={this.state.visibleStudents}
                 deleteStudent={this.deleteStudent}
                  />
              { this.state.showForm &&
              <AddPerson campuses={this.props.campuses} /> }
            </div>
        </div>
        )
        }
  }


        // .then(
        //   axios.get('/api/students')
        //   .then(res => res.data)
        //   .then(students => {
        //     this.setState({visibleStudents: students})
        //     this.forceUpdate()
        //     console.log(this.state.visibleStudents)
        //   })
      // )
