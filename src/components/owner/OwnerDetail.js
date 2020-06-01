import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';


class OwnerDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        phoneNumber: owner.phoneNumber
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./mike.jpeg')} alt="Mike" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;