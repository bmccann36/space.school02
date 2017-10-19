import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom'


import StudentTable from '../components/StudentTable'
import AddPerson from '../components/AddPerson'
import StudentIngo from '../components/StudentInfo'

export default class StudentsContainer extends Component {
  constructor() {
    super()
    this.state = {
      showForm: false,
      allStudents: [],
      selectedStudent: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.deleteStudent = this.deleteStudent.bind(this)
    this.addStudent = this.addStudent.bind(this)
  }


  componentDidMount() {

    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({ allStudents: students })
        const studentId = this.props.match.params.studentId
        if (studentId) {
          const selected = students.filter(student => {
            return student.id === +studentId
          })
          // console.log(selected, 'selected student')
          this.setState({ selectedStudent: selected })}
      })


  }

  addStudent(payload) {
    const prevStuds = this.state.allStudents
    axios.post('/api/students/add', payload)
      .then(res => res.data)
      .then(newEntry => {
        console.log(newEntry)
        this.setState({ allStudents: [...prevStuds, newEntry] })
      })
  }


  deleteStudent(studentId) {
    const prevStuds = this.state.allStudents
    axios.delete(`api/students/${studentId}/delete`)
    const currStuds = prevStuds.filter(student => {
      return student.id !== studentId
    })
    this.setState({ allStudents: currStuds })
  }

  handleClick() {
    this.setState({ showForm: true })
  }


  render() {
    const display = this.state.selectedStudent || this.state.allStudents
    console.log( display, 'display')
      return (

      <div className="students-container" >
        <button onClick={this.handleClick}> click to add a student </button>
        <div >
          <StudentTable students={display}
            deleteStudent={this.deleteStudent}
          />
          {this.state.showForm &&
            <AddPerson campuses={this.props.campuses}
              addStudent={this.addStudent}
            />}
          {display && <StudentInfo/>}
        </div>

      </div>
      )
  }
}


        // .then(
        //   axios.get('/api/students')
        //   .then(res => res.data)
        //   .then(students => {
        //     this.setState({allStudents: students})
        //     this.forceUpdate()
        //     console.log(this.state.allStudents)
        //   })
      // )
