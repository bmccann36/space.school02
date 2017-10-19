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
    this.props.addStudent(payload)
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
            <input placeholder= "name" type="text" name="name" value="buddy" />
            <input placeholder= "email" type= "text" name="email" value="bud@@" />
            <input placeholder= "gpa" type= "text" name="gpa" value={3} />

              <select type="text" name="campus">
                <option>{1}</option>
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

