import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../components/abstract/Spinner/Spinner';
import './ActiveItemView.scss';

class ActiveItemView extends Component {
    constructor() {
        super();

        this.state = {
            gameIsLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://gameLoader/" + this.props.game.name)
            .then(res => {
                this.setState({
                    gameIsLoaded: true
                })
            })
            .catch(err => {

            })
    }

    render() {
        return (
            <div className="wrapper container">
                <main className="game-loader flex-item-4">
                    {!this.state.gameIsLoaded ? <Spinner /> : <div>{this.props.game.name}</div>}
                </main>
                <section className="game-description flex-item-1">
                    <img src={this.props.game.thumb} alt="Game Img" width="90%"/>
                    <h2>{this.props.game.name}</h2>
                    <p>{this.props.game.description}</p>
                </section>
            </div>
        )
    }
}

export default ActiveItemView;

ActiveItemView.propTypes = {
    game: PropTypes.object.isRequired
};