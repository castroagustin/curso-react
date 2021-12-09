import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJE0eYgUS_391ZB8PjmAos1s8PHlbG5ZY",
  authDomain: "castro-ecommerce.firebaseapp.com",
  projectId: "castro-ecommerce",
  storageBucket: "castro-ecommerce.appspot.com",
  messagingSenderId: "75183673952",
  appId: "1:75183673952:web:9313f70feb2ea4385f2905"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
