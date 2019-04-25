import React  from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
import App from './App'


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Book} />
    </Switch>
);
