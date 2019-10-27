import React, { Component } from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends Component {
    state = {
        images: []
    };
    apiCall = async val => {
        const res = await unsplash.get('search/photos', {
            params: { query: val }
        });
        // .then(response => {
        //     console.log(response.data.results);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        this.setState({
            images: res.data.results
        });
        console.log(this.state.images);
    };

    componentDidMount() {
        this.apiCall('popular');
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar getVal={this.apiCall}></SearchBar>
                {this.state.images.length ? (
                    <div className='ui header'>Images found:</div>
                ) : (
                    <div className='ui segment'>
                        <p>Loading...</p>
                        <div className='ui active large centered inline loader'></div>
                    </div>
                )}

                {/* <ul>{this.state.images.map(i)}</ul> */}
                {/* {this.state.images.length} */}
                <ImageList images={this.state.images}></ImageList>
            </div>
        );
    }
}
