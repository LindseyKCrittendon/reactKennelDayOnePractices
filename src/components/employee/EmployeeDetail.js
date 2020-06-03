

import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
}

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        phoneNumber: employee.phoneNumber
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./cat.jpg')} alt="Smiling Cat" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
            <button type="button"
        onClick={() => {this.props.history.push(`/employees/${this.props.employeeId}/edit`)}}>Edit</button>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Pink Slip</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;