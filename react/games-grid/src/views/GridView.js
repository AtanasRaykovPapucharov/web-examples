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
            return <article key={i} className="first-game flex-item-4">
                        <Link to={"/" + game.name}>
                            <img src={game.thumb} alt="game" width="90%"/>
                            <span>{game.name}</span>
                        </Link>
                    </article>
        });

        const gamesView = this.props.games.slice(1).map((game, i) => {
            return <article key={i} className="small-games">
                        <Link to={"/" + game.name}>
                            <img src={game.thumb} alt="game" width="100%"/>
                            {window.innerWidth < 260 ? <span>{game.name.slice(0, 13)}</span> : window.innerWidth > 768 ? <span>{game.name.slice(0, 23)}</span> : <span>{game.name.slice(0, 14)}</span>}
                        </Link>
                    </article>
        })

        return (
            <div className="wrapper container">
                {firstGame}
                <div className="flex-item-6">
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