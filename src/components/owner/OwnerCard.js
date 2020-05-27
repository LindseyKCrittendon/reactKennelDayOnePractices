import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./mike.jpeg')} alt="Mike" />
          </picture>
          <h3>Name: <span className="card-owner">Address: </span></h3>
          <p>Nice quote about cats</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;