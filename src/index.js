import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './page/Home/Home.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <App>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
    </App>
    </HashRouter>,
	 document.getElementById('root')
	 );
registerServiceWorker();
