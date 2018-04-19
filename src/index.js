import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Landing from './Pages/Landing';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(

    <BrowserRouter>
        <Switch>   
	            <Route path = "/main" component = {Main}/>
	            <Route path = "/login" component = {Login}/>
                <Route path = "/" component = {Landing}/>
        
        </Switch>
    </BrowserRouter>
    
    
    
    
    , document.getElementById('root'));
registerServiceWorker();
