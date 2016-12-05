import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {
        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hoover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temerature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

//pulls off object property
// creates property of same key
function mapStateToProps({weather}) {
    return { weather };
}

// connectin the weather property to the list
export default connect(mapStateToProps)(WeatherList);