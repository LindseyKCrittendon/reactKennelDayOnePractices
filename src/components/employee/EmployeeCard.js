import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./cat.jpg')} alt="Happy Cat" />
          </picture>
          <h3>Name: {this.props.employeeProp.name}</h3>
          <p>Phone Number: {this.props.employeeProp.phoneNumber}</p>
          
          <Link to={`/employees/${this.props.employeeProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;