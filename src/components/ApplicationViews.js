//weird controller page that renders things after user clicks; imagined an old telephone switchboard when Jordan described it

import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './location/LocationCard'
import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalCard />
        }} />
          <Route path="/location" render={(props) => {
          return <LocationCard />
        }} />
          <Route path="/owner" render={(props) => {
          return <OwnerCard />
        }} />
          <Route path="/employee" render={(props) => {
          return <EmployeeCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews