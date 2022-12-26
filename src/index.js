import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes/router';
import './index.css'


const Index = () => {
  return (
    <> <Router /></>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index />
);

