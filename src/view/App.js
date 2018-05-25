import React, {Component} from 'react'
import {Switch} from 'react-router'
import {BrowserRouter, Route, NavLink, Redirect} from "react-router-dom"
import ViewButton from './ViewButton'
import ViewIcon from './ViewIcon'

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <div>
          <ul>
            <li>
              <NavLink to="/button">button</NavLink>
            </li>
            <li>
              <NavLink to="/icon">icon</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/button" component={ViewButton}/>
            <Route path="/icon" component={ViewIcon}/>
            <Redirect from="/" to="/button"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>)
  }
}

export default App;
