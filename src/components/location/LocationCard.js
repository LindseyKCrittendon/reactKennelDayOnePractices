import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./map.svg')} alt="Map icon" />
          </picture>
          <h3>Phone Number: {this.props.locationProp.phoneNumber} <span className="card-location">Address: {this.props.locationProp.address}</span></h3>
          <p>Extra Info:</p>
          
          <Link to={`/locations/${this.props.locationProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;