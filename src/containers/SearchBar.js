import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
    e.currentTarget.focus();
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Get a five-day forecast in your city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
