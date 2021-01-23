import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from "./components/KandyKorner"
import { LocationList } from "./components/location/LocationList"

ReactDOM.render(
  <React.StrictMode>
    <KandyKorner />
    <LocationList />
  </React.StrictMode>,
  document.getElementById('root')
);
