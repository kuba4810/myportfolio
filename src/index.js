import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './store'
import {Provider} from 'react-redux'

import '../src/bootstrap/css/bootstrap.css'
import '../src/styles/style.css'
import '../src/styles/animations.css'


ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
