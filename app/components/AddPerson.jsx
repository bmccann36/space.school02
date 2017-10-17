import React, { Component } from 'react';
import axios from 'axios';

export default class AddPerson extends Component {
  constructor() {
    super()
    this.state = { name: '', email: '', gpa: 0 }
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleGpa = this.handleGpa.bind(this)
    this.createNew = this.createNew.bind(this)
    }

  handleName(ev){
    this.setState({ name: ev.target.value });
    }
  handleEmail(ev){
    this.setState({ email: ev.target.value });
    }
  handleGpa(ev){
    this.setState({ gpa: ev.target.value });
    }

  createNew(event){
    event.preventDefault()
    const payload = this.state
    axios.post( '/api/students/add', payload )
      .then(res => res.data)
      .then(newEntry => console.log(newEntry))
    this.setState({name: '', email: '', gpa: 0})
  }


  render() {
    let name= ''
    return (
      <div className= "add-person">
        <h1>Add Person </h1>
        <form onSubmit = {this.createNew} >
          <fieldset>
            <input placeholder= "name" type="text" value={this.state.name}
            onChange= {this.handleName } />

            <input placeholder= "campus" type= "text" value={this.state.email}
            onChange= {this.handleEmail } />

            <input placeholder= "gpa" type= "text" value={this.state.gpa}
            onChange= {this.handleGpa } />
            <button
                type="submit"
                className="btn btn-success">
                submit
              </button>
          </fieldset>
        </form>

      </div>
    )
  }
}

