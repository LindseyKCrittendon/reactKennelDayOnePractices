import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';


class LocationDetail extends Component {

  state = {
      address: "",
      phoneNumber: "",
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/location"))
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
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;