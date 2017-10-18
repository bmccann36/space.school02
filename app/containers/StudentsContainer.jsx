import React, { Component } from 'react';
import axios from 'axios';


import StudentTable from '../components/StudentTable'
import AddPerson from '../components/AddPerson'

export default class StudentsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStudents: [],
      showForm: false
     }
     this.handleClick = this.handleClick.bind(this)
    }
  handleClick(){
      this.setState({showForm: true})
      // console.log(this.state.showForm)
  }


  render() {
    // console.log(this.props, 'in students container')
      return (
        <div>
          <button onClick = { this.handleClick}> click to edit </button>
            <div className= "students-container" >
                {/* <StudentTable students={this.state.students}/> */}
              { this.state.showForm &&
              <AddPerson campuses={this.props.campuses} /> }
            </div>
        </div>
        )
        }
  }


