import React, { Component } from 'react';
import Select from './Select';

import styles from './Home.css';
class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            Filter: ""
        }
    }


    render() {
        return (
            <form >
                <fieldset className="main">
                    <div >
                        <Select />
                    </div>
                </fieldset>
            </form>
        )
    }
}
export default Home;