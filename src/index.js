import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);

serviceWorker.unregister();