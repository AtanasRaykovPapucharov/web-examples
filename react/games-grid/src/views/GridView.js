import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './GridView.scss';

class GridView extends Component {
    constructor() {
        super();
        
        this.state = {
            activeId: 1
        }
    }

    render() {
        const firstGame = this.props.games.slice(0, 1).map((game, i) => {
            return <article key={i} className="first-game flex-item-2">
                        <Link to={"/" + game.name}>
                            <img src={game.thumb} alt="game" width="100%"/>
                            <h2>{game.name}</h2>
                        </Link>
                    </article>
        });

        const gamesView = this.props.games.slice(1).map((game, i) => {
            return <article key={i} className="small-games">
                        <Link to={"/" + game.name}>
                            <img src={game.thumb} alt="game" width="100%"/>
                            <h4>{game.name}</h4>
                        </Link>
                    </article>
        })

        return (
            <div className="wrapper container">
                {firstGame}
                <div className="flex-item-4">
                    {gamesView}
                </div>
            </div>
        )
    }
}

export default GridView;

GridView.propTypes = {
    games: PropTypes.array.isRequired
};