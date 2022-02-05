import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import {MovieContextProvider} from './service/movie-context';

ReactDOM.render(
    <MovieContextProvider>
        <Router>
            <App />
        </Router>
    </MovieContextProvider>,
    document.getElementById('root')
);
