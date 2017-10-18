import React, { Component } from 'react';
import axios from 'axios';

export default class AddPerson extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', gpa: 0, campus: 0 }
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
    console.log(payload)
    axios.post( '/api/students/add', payload )
      .then(res => res.data)
      .then(newEntry => console.log(newEntry))
    // this.setState({name: '', email: '', gpa: 0})
  }


  render() {
    console.log(this.props.campuses, 'in add person')
const campusNames = this.props.campuses.map(campus => {
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
            <button type="submit" className="btn btn-success">
                submit
              </button>
          </fieldset>
        </form>

      </div>
    )
  }
}

