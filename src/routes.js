import React  from 'react';
import { Switch, Route, IndexRoute } from 'react-router-dom';

import App from './App';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';


export default (
    <Switch>
        <Route path="/" component={App}>
            <IndexRoute exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Book} />
        </Route>
    </Switch>
);
