npm uninstall react react-dom
npm install react@17.0.2 react-dom@17.0.2
Change index.js to

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
<React.StrictMode>
<App/>
</React.StrictMode>,
document.getElementById('root')
);
