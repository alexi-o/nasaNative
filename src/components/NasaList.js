import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import NasaDetail from './NasaDetail';

class NasaList extends Component {
    state = {
        rovers: []
    };

    componentWillMount() {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY')
            .then(response => this.setState({ rovers: response.data.photos }));
    }

    renderRovers() {
        return this.state.rovers.map(rover =>
        <NasaDetail key={rover.id} rover={rover} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderRovers()}
            </ScrollView>
        );
    }
}
export default NasaList;