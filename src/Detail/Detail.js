import React, { Component } from 'react'
import Select from './../Home/Select';
import styles from "./Detail.css";
const data = [
    {
        city: 'Delhi',
        type: 'Bike',
        Bike_name: 'Activa',
        RentPerDay: 400,
        Deposit: 2000,
        Vehicle_type: 'Scooter',
        image: `http://www.ridobiko.com/sample_images/activa.png`
    },

    {
        city: 'Delhi',
        type: 'Bike',
        Bike_name: 'FZ',
        RentPerDay: 700,
        Deposit: 2000,
        Vehicle_type: 'Bike',
        image: `http://www.ridobiko.com/sample_images/fz.png`
    },


    {
        city: 'Delhi',
        type: 'Car',
        Bike_name: 'WagonR',
        RentPerDay: 1200,
        Deposit: 5000,
        Vehicle_type: 'Economy',
        image: `http://www.ridobiko.com/sample_images/wagon.png`
    },


    {
        city: 'Delhi',
        type: 'Car',
        Bike_name: 'Swift',
        RentPerDay: 1800,
        Deposit: 2000,
        Vehicle_type: 'Sedan',
        image: `http://www.ridobiko.com/sample_images/swift.png`
    },


    {
        city: 'Hyderabad',
        type: 'Bike',
        Bike_name: 'Pulsar',
        RentPerDay: 800,
        Deposit: 2000,
        Vehicle_type: 'Bike',
        image: `https://www.gaadi.com/bikes/bajaj/pulsar-200-ns/price-in-chandrapur`
    }

]
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tech: "",
            type: "",
        }
    }
    render() {
        return (
            <div>
                <div className="heading"><h1>DETAILS</h1></div>
                <div className="body">
                    {data.filter(value => value.city === this.props.tech && value.type === this.props.type).map(filteredValue => (
                        <div className="main">
                            <div>
                                <img src={filteredValue.image} alt="randomVehicle" className="hero" />
                            </div>
                            <div className="texttype">
                                <div>
                                    {filteredValue.city}
                                </div>
                                <div>
                                    {filteredValue.type}
                                </div>
                                <div>
                                    {filteredValue.Bike_name}
                                </div>
                                <div>
                                    {filteredValue.RentPerDay}
                                </div>
                                <div>
                                    {filteredValue.Deposit}
                                </div>
                                <div>
                                    {filteredValue.Vehicle_type}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Detail;
