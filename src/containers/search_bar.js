import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


// This is a container as it needs to talk to redux
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange(event) {
        // Set State is a react component function
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                 />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// this causes the action creator to be called and be passed down through the reducers
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null because this component has no state
export default connect(null, mapDispatchToProps)(SearchBar);