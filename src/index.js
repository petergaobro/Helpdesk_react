import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import {BrowserRouter} from "react-router-dom";

const config = {
    apiKey: "AIzaSyAqiE9YvKenbnheBU_VfIEQXRIUlLETmYo",
    authDomain: "wda-a2-1dd8d.firebaseapp.com",
    databaseURL: "https://wda-a2-1dd8d.firebaseio.com",
    projectId: "wda-a2-1dd8d",
    storageBucket: "",
    messagingSenderId: "526228076061"
};
firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();