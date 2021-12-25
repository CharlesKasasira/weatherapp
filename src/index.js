import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(<StrictMode><App /></StrictMode>, document.getElementById('root'));

reportWebVitals();
