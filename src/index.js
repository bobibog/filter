import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BreakpointContextProvider from './context/breakpoint-context';
import {BrowserRouter} from 'react-router-dom';

//const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;




const queries = {
  xs: '(max-width: 600px)',
  sm: '(max-width: 960px)',
  md: '(max-width: 1280px)',
  lg: '(max-width: 1919px)',
  or: '(orientation: portrait)', // we can check orientation also
}

ReactDOM.render(
  <React.StrictMode>     
        <BreakpointContextProvider queries={queries}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BreakpointContextProvider>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
