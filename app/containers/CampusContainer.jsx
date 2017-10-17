
import React, { Component } from 'react';
import StudentListContainer from './StudentListContainer'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Campuses from '../components/Campuses'
// make an axios request for all students

export default class CampusContainer extends Component {
  constructor() {
    super()
    this.state = {}
  }


  render(){
    let campusId = 2
    return (
      <BrowserRouter>
        <div className= "campus-container">

          <Route path= '/' component={Campuses} />
          <Route exact path= '/campus' component={StudentListContainer} />

        </div>
      </BrowserRouter>
    )

}
}

  // axios request to load all campuses

  // on campus icon click react router gets triggered to show the studentList  view in addition to the campuses grid

  // student list container - - -
// maybe container and component can be the same
  // <Link className="thumbnail" to={`/albums/${album.id}`}>
  // link to /campus/${campus.id}

  // the list of students component
  // uses this.props.routeParams.campusId to know what students to render





