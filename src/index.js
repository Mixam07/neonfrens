import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import "./nullstyle.css";
import { BrowserRouter } from 'react-router-dom';
import "animate.css/animate.min.css";
import store from './redux/store';
import { Provider } from "react-redux";
import AppContainer from './components/App/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
);