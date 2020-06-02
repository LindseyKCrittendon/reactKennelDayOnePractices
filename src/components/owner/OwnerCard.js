import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./mike.jpeg')} alt="Mike" />
          </picture>
          <h3>Name: {this.props.ownerProp.name}<span className="card-owner">Address: {this.props.ownerProp.phoneNumber}</span></h3>
          <p>Nice quote about cats</p>
          
          <Link to={`/owners/${this.props.ownerProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;