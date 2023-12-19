import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.scss'
import 'animate.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';







ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

  <App />

  
</BrowserRouter>,
)
