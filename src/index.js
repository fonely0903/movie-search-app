import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import {MovieContextProvider} from './service/movie-context';

ReactDOM.render(
    <MovieContextProvider>
        <App />
    </MovieContextProvider>,
    document.getElementById('root')
);
