import React, { Component } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../../util/APIUtils';
import Alert from 'react-s-alert';

class Signup extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location },
          }}
        />
      );
    }

    return (
      <div className="signup-container">
        <div className="signup-content">
          <h1 className="signup-title">Signup</h1>
          <SignupForm {...this.props} />
          <span className="login-link">
            Already have an account? <Link to="/login">Login!</Link>
          </span>
        </div>
      </div>
    );
  }
}

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      role: 'user', // Default role is set to 'user'
      farmName: '',
      cropType: '',
      supplierName: '',
      productType: '',
      serviceName: '',
      serviceType: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Perform telephone number validation
    const isValidPhoneNumber = this.validatePhoneNumber(this.state.phoneNumber);
    if (!isValidPhoneNumber) {
      Alert.error('Please enter a valid telephone number.');
      return;
    }

    const signUpRequest = Object.assign({}, this.state);

    signup(signUpRequest)
      .then((response) => {
        Alert.success("You're successfully registered. Please login to continue!");
        this.props.history.push('/login');
      })
      .catch((error) => {
        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
      });
  }

  validatePhoneNumber(phoneNumber) {
    // Implement your telephone number validation logic here
    // You can use regular expressions or any other validation method

    // Example: Validate that the phone number has 10 digits
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  }

  render() {
    const { role } = this.state;

    let roleSpecificInputs = null;
    if (role === 'farmer') {
      roleSpecificInputs = (
        <div>
          <div className="form-item">
            <input
              type="text"
              name="farmName"
              className="form-control"
              placeholder="Farm Name"
              value={this.state.farmName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="text"
              name="cropType"
              className="form-control"
              placeholder="Crop Type"
              value={this.state.cropType}
              onChange={this.handleInputChange}
              required
            />
          </div>
        </div>
      );
    } else if (role === 'supplier') {
      roleSpecificInputs = (
        <div>
          <div className="form-item">
            <input
              type="text"
              name="supplierName"
              className="form-control"
              placeholder="Supplier Name"
              value={this.state.supplierName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="text"
              name="productType"
              className="form-control"
              placeholder="Product Type"
              value={this.state.productType}
              onChange={this.handleInputChange}
              required
            />
          </div>
        </div>
      );
    } else if (role === 'service') {
      roleSpecificInputs = (
        <div>
          <div className="form-item">
            <input
              type="text"
              name="serviceName"
              className="form-control"
              placeholder="Service Name"
              value={this.state.serviceName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="text"
              name="serviceType"
              className="form-control"
              placeholder="Service Type"
              value={this.state.serviceType}
              onChange={this.handleInputChange}
              required
            />
          </div>
        </div>
      );
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-item">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            placeholder="Telephone Number"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            className="form-control"
            value={this.state.role}
            onChange={this.handleInputChange}
          >
            <option value="user">User</option>
            <option value="farmer">Farmer</option>
            <option value="supplier">Supplier</option>
            <option value="service">Service</option>
          </select>
        </div>

        {roleSpecificInputs}

        <div className="form-item">
          <button type="submit" className="btn btn-block btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default Signup;
