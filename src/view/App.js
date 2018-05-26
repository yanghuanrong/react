import React, {Component} from 'react'
import {Switch} from 'react-router'
import {HashRouter, Route, NavLink, Redirect} from "react-router-dom"
import './page.less'
import ViewButton from './ViewButton'
import ViewIcon from './ViewIcon'

class App extends Component {
  render() {
    return (<HashRouter>
      <div className="page">
        <aside className="page-sidebar">
          <div className="sidebar">
            <div className="sidebar-brand">
              <a>Logo</a>
            </div>
            <div className="sidebar-body">
              <span className="sidebar-title">General</span>
              <ul className="sidebar-list">
                <li>
                  <NavLink to="/button" className="sidebar-link">Button 按钮</NavLink>
                </li>
                <li>
                  <NavLink to="/icon"  className="sidebar-link">Icon 图标</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="page-content">
          <Switch>
            <Route path="/button" component={ViewButton}/>
            <Route path="/icon" component={ViewIcon}/>
            <Redirect from="/" to="/button"/>
          </Switch>
        </div>
      </div>
    </HashRouter>)
  }
}

export default App;
