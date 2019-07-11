import React, { Component } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Spinner.scss';

class Spinner extends Component {
    render() {
        return (
        <div id="spinner">
            <FontAwesomeIcon className="ico fa-spin" icon={faSpinner} />
            <div className="info">Loading ...</div>
            <br />
        </div>
        )
    }
}

export default Spinner;