
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios'
// make an axios request for all students
import StudentsContainer from './StudentsContainer'
import Nav from '../components/Nav'
import Campuses from '../components/Campuses'
import StudentList from '../components/StudentList'


export default class AppContainer extends Component {
  constructor() {
    super()
    this.state = { campuses: [],
                  selectedCampus: 0,
                  visibleStudents: [],
                  allStudents: []
                  }
    this.changeSelected = this.changeSelected.bind(this)
  }

  componentDidMount(){
    const campuses = axios.get('/api/campuses')
    const students = axios.get('/api/students')

    Promise.all([campuses,students])
    .then(res => res.map(r => r.data))
    .then(data => {
      this.setState({campuses: data[0], allStudents: data[1]})
    })
// data[0] is campuses  data[1] is students
  }

  // when the campus div is clicked it changes campus ID on state
  changeSelected(campusId){
    axios.get(`/api/campuses/${campusId}/students`)
    .then(res => res.data)
    .then(list => {
      this.setState( {visibleStudents: list} )
    })
  }


  render(){
    // const campusId = this.state.selectedCampus
    // console.log(this.state.visibleStudents)
    return (
      <BrowserRouter>
      <div>
      <Nav />
        <div className= "campus-container">
          <Route exact path= "/" render={() => <Campuses
          campuses={this.state.campuses}
          setCampus = {this.changeSelected} />}
          />
          <Route exact path = "/" render={() => <StudentList students = {this.state.visibleStudents} />}
          />
          <Route exact path="/students" render={() => <StudentsContainer
          allStudents = {this.state.allStudents}
          campuses = {this.state.campuses} />}
           />
        </div>
      </div>
        </BrowserRouter>

    )

}
}

// HOW TO USE RENDER + PASS PROPS
    /* <Route path= "/" render={() => <Campuses campuses={this.state.campuses}
    setCampus = {this.changeSelected}
     />} /> */


// HOW I RENDERED STUDENT LIST
    /* <StudentList
    students= {this.state.allStudents}
    campuses= {this.state.campuses}
    /> */
  // axios request to load all campuses

  // on campus icon click react router gets triggered to show the studentList  view in addition to the campuses grid

  // student list container - - -
// maybe container and component can be the same
  // <Link className="thumbnail" to={`/albums/${album.id}`}>
  // link to /campus/${campus.id}

  // the list of students component
  // uses this.props.routeParams.campusId to know what students to render


// routing and passing props



