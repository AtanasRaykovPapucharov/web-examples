import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActiveItemView extends Component {

    render() {
        return (
            <div className="wrapper">
                ActiveItemView
            </div>
        )
    }
}

export default ActiveItemView;

ActiveItemView.propTypes = {
    game: PropTypes.object.isRequired
};