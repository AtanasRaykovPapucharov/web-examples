import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import reactServiceWorker from './services/ReactServiceWorker';
import App from './components/App/App';

const history = createBrowserHistory();

ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'));
library.add(faIgloo);
reactServiceWorker();
