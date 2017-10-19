import React, { Component } from 'react';
import axios from 'axios';


export default class AddCampus extends Component {
  constructor(){
  super()
  }



render() {
    return (
      <div>
        <form onSubmit = {'none'} >
        <input placeholder= "Campus Name" type="text" name="name" value="Default Campus" />
        </form>
    </div>
    )
  }
}


// <div>
// <form onSubmit = {this.handleSubmit} >
// <fieldset>


//   <button type="submit" className="btn btn-success">
//     submit </button>
//   </fieldset>
// {/*  */}
// </div>
