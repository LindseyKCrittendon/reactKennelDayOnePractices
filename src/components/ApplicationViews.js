//weird controller page that renders things after user clicks; imagined an old telephone switchboard when Jordan described it

// import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { Route, withRouter, Redirect } from "react-router-dom"
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList.js'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'


class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
       <Route exact path="/animals" render={props => {
    if (this.isAuthenticated()) {
        return <AnimalList {...props} />
    } else {
        return <Redirect to="/login" />
    }
        }} />
        <Route  path="/animals/:animalId(\d+)" render={(props) => {
            return <AnimalDetail animalId={props.match.params.animalId} {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
        }} />
              <Route exact path="/location" render={props => {
             if (this.isAuthenticated()) {
             return <LocationList {...props} />
             } else {
            return <Redirect to="/login" />
            }
                // {this.isAuthenticated() ? <LocationList {...props}/>
                // : <Redirect to="/login" />}
}} />
          <Route  path="/locations/:locationId(\d+)" render={(props) => {
            return <LocationDetail locationId={props.match.params.locationId} {...props}/>
        }} />
        <Route path="/locations/new" render={(props) => {
        return <LocationForm {...props} />
        }} />
           <Route exact path="/owner" render={props => {
    if (this.isAuthenticated()) {
        return <OwnerList {...props} />
    } else {
        return <Redirect to="/login" />
    }
        }} />
          <Route  path="/owners/:ownerId(\d+)" render={(props) => {
            return <OwnerDetail ownerId={props.match.params.ownerId} {...props} />
        }} />
        <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />
        }} />
          <Route exact path="/employee" render={props => {
    if (this.isAuthenticated()) {
        return <EmployeeList {...props} />
    } else {
        return <Redirect to="/login" />
    }
        }} />
        <Route  path="/employees/:employeeId(\d+)" render={(props) => {
            return <EmployeeDetail employeeId={props.match.params.employeeId} {...props} />
        }} />
        <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
        }} />
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews