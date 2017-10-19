import React, { Component } from 'react';
import axios from 'axios';


export default class AddCampus extends Component {
  constructor(){
  super()
  }


render() {
    return (
      <div>
        <fieldset>
        <form onSubmit = {()=> console.log('click')} >
        <input placeholder= "Campus Name" type="text" name="name" value="Default Campus" />
        <button type="submit" className="btn btn-success">
         submit </button>
        </form>
        </fieldset>
    </div>
    )
  }
}


// <div>
// <form onSubmit = {this.handleSubmit} >
// <fieldset>


//   </fieldset>
// {/*  */}
// </div>
