import React, { Component } from 'react';

// TODO convert to functional component if not using state
export default class Loader extends Component {

    render() {
        return (
            <div className="Loader">
                <p>Loading ...</p>
            </div>
        );
    }
}
