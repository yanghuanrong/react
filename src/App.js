import React, { Component } from 'react';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import Home from './components/homeView'
import Hot from './components/hotView'
import Browse from './components/browseView'
import Search from './components/searchView'

const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">音乐资料库</NavLink>
        <NavLink activeClassName="active" to="/hot">为你推荐</NavLink>
        <NavLink activeClassName="active" to="/browse">浏览</NavLink>
        <NavLink activeClassName="active" to="/search">搜索</NavLink>
    </nav>
)

const App = () => (
    <BrowserRouter>
        <div>

            <Links />

            <Route exact path="/" component={Home} />
            <Route path="/hot" component={Hot} />
            <Route path="/browse" component={Browse} />
            <Route path="/search" component={Search} />
        </div>
    </BrowserRouter>
)

export default App;
