import React, { Component } from 'react';
import axios from 'axios';


import StudentTable from './StudentTable'
import AddPerson from './AddPerson'

export default class Students extends Component {
  constructor() {
    super()
    this.state = { students:[],
      selectedStudents: [],
      showForm: false
     }
     this.handleClick = this.handleClick.bind(this)
    }
  handleClick(){
      this.setState({showForm: true})
      console.log(this.state.showForm)
  }

  componentDidMount(){
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        this.setState({students})
        // console.log(students)
      })
  }

  render() {
      return (
        <div>
          <button onClick = { this.handleClick}> click to edit </button>
            <div className= "students-container" >
                <StudentTable students={this.state.students}/>
              { this.state.showForm && <AddPerson /> }
            </div>
        </div>
        )
        }
  }


