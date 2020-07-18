import React, { Component } from 'react';
import styles from './Home.css';
import Detail from '../Detail/Detail';
import { Button } from 'react-bootstrap';
import history from './../history';
import { withRouter } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
class Select extends Component {
    constructor(props) {
        super();
        this.state = {
            tech: 'City',
            type: 'Type',
            clicked: false,
        };
    }
    handleCityChange = (e) => {
        this.setState({
            tech: e.target.value
        })

    }

    handleTypeChange = (e) => {
        this.setState({
            type: e.target.value
        })

    }

    onClick = () => {
        this.setState({
            clicked: true,
        })
    }

    render() {
        return (
            <div className="element">
                <div>
                    <select id="lang" value={this.state.tech} onChange={this.handleCityChange.bind(this)}>
                        <option value="City">Select the City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                    <h2>{this.state.tech}</h2>
                </div>

                <div>
                    <select id="lang" onChange={this.handleTypeChange.bind(this)} value={this.state.type}>
                        <option value="Type">Select the Type</option>
                        <option value="Car">Car</option>
                        <option value="Bike">Bike</option>
                    </select>
                    <h2>{this.state.type}</h2>
                </div>
                <form>
                    <Button className="main" variant="btn btn-success" onClick={this.onClick.bind(this)}> Search</Button>
                </form>
                {this.state.clicked ? <Detail tech={this.state.tech} type={this.state.type} /> : null}
            </div >
        )
    }
}

export default Select;
