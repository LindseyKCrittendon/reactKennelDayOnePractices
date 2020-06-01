import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';


class LocationDetail extends Component {

  state = {
      address: "",
      phoneNumber: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        address: location.address,
        phoneNumber: location.phoneNumber
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./map.svg')} alt="Map Icon" />
          </picture>
            <h3>Address: <span style={{ color: 'darkslategrey' }}>{this.state.address}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;