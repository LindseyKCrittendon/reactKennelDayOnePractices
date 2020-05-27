import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import LocationCard from './location/LocationCard'
import OwnerCard from './owner/OwnerCard'
import EmployeeCard from './employee/EmployeeCard'
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'

class Kennel extends Component {
    // kennelName= "Student Kennels"
    render() {
        return (
            <>
            <NavBar />
            <ApplicationViews />
            </>
	
        );
    }
}

export default Kennel