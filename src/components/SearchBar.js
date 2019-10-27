import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            term: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        //
        this.props.getVal(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor='search'>Search Bar:</label>
                        <input
                            id='search'
                            name='search'
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.term}
                        />
                    </div>
                    <button className='ui button'>go!</button>
                </form>
            </div>
        );
    }
}
