import React,{Component} from "react";
import  ReactDOM from "react-dom";
import { Router , Route  , hashHistory } from 'react-router';
import { createHistory } from 'history'
import App from "./App";
import SignUp from "./SignUp";
import Home from "./WebSitePages/Home";
import FrontEndArticle from "./WebSitePages/FrontEndArticle";
import BackEndArticle from "./WebSitePages/BackEndArticle";
const routs =(

            <Router history={hashHistory}>
                <Route path="/" component={App}/>
                <Route path="/login" component={App}/>
                <Route  path="/Signup" component={SignUp}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Home/Front-End" component={FrontEndArticle}/>
                <Route path="/Home/Back-End" component={BackEndArticle}/>
            </Router>

);

ReactDOM.render(routs,document.getElementById('app'));
