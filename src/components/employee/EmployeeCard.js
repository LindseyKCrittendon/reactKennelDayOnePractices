import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./cat.jpg')} alt="Happy Cat" />
          </picture>
          <h3>Name: <span className="card-location">Address: </span></h3>
          <p>Extra Info</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;