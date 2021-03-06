import React, { Component } from 'react';
import axios from 'axios';

export default class AddPerson extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', gpa: 0, campus: 0,
    campuses: []
  }
    this.handleSubmit = this.handleSubmit.bind(this)
    }

  handleSubmit(event){
    event.preventDefault()
    const payload = {
      name: event.target.name.value,
      email: event.target.email.value,
      gpa: event.target.gpa.value,
      campusId: event.target.campus.value
    }
    let isEntry = true
    for(var key in payload){
      if(!payload[key].length) isEntry=false
    }
    console.log(isEntry)
    if (isEntry) this.props.addStudent(payload)
    else this.props.editStudent(payload.name, payload)
  }

  componentDidMount(){
  axios.get('/api/campuses')
  .then(res => res.data)
  .then(campuses => {
    this.setState({campuses})
  })
  }

  render() {
const campusNames = this.state.campuses.map(campus => {
  return <option key={campus.id} value={campus.id} > {campus.name} </option>
})
    return (
      <div className= "add-person">
        <h1>Add Person </h1>
        <form onSubmit = {this.handleSubmit} >
          <fieldset>
            <input placeholder= "name" type="text" name="name"  />
            <input placeholder= "email" type= "text" name="email"  />
            <input placeholder= "gpa" type= "text" name="gpa"  />
              <select type="text" name="campus">
              <option value="" > select campus </option>
                {campusNames}
              </select>
            <button type="submit">
                submit
              </button>
          </fieldset>
        </form>

      </div>
    )
  }
}

