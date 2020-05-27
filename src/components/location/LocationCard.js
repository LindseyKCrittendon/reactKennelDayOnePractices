import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./map.svg')} alt="Map icon" />
          </picture>
          <h3>Name: <span className="card-location">Address: </span></h3>
          <p>Extra Info</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;