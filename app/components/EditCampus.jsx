import React, { Component } from 'react';
import axios from 'axios';


export default class EditCampus extends Component {
  constructor(props){
  super(props)
  this.handleSubmitDelete = this.handleSubmitDelete.bind(this)
  this.handleSubmitCreate = this.handleSubmitCreate.bind(this)
  }

  handleSubmitDelete(event){
    event.preventDefault()
    this.props.deleteCampus(event.target.campus.value)
  }

  handleSubmitCreate(event){
    event.preventDefault()
   const payload = {
     name: event.target.newCampus.value,
     image: 'default image'
   }
    this.props.createCampus(payload)
  }


render() {
  // console.log(this.props.createCampus)
  const campuses = this.props.campuses.map( campus => {
    return <option key={campus.id} value={campus.id} > {campus.name} </option>
  })
    return (
      <div>
        <form onSubmit = {this.handleSubmitDelete}>
          <p> delete campus </p>
          <select type="text" name="campus">
            {campuses}
          </select>
         <button type="submit"> submit</button>
        </form>
          <p> create campus </p>
        <form onSubmit = {this.handleSubmitCreate}>
            <input placeholder= "Campus Name" type="text" name="newCampus" />
             <button type="submit"> submit</button>
        </form>
      </div>
    )
  }
}

// SUBMIT FUNCTION FOR LATER
// <div>
// <fieldset>
// <form onSubmit = {()=> console.log('click')} >
// <input placeholder= "Campus Name" type="text" name="name" value="Default Campus" />
// <button type="submit" className="btn btn-success">
//  submit </button>
// </form>
// </fieldset>
// </div>

