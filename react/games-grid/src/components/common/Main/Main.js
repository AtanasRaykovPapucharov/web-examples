import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GridView from '../../../views/GridView';
import games from '../../../data/grid-app-data.json';
import './Main.scss';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        this.setState({ games: games.categories[0].games });
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/grid" component={() => { return <GridView games={this.state.games}/>}} />
                    <Redirect from="/" to="grid" />
                </Switch>
            </main>
        )
    }
}

export default Main;