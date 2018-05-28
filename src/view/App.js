import React, {Component} from 'react'
import {Switch,withRouter} from 'react-router'
import {HashRouter, Route, NavLink, Redirect} from "react-router-dom"
import './page.less'
import ViewButton from './ViewButton'
import ViewIcon from './ViewIcon'

const routes = [
  {
    path: "/button",
    sidebar: () => <h2 className="navbar-title">Button</h2>,
    main: () => <ViewButton></ViewButton>
  }, {
    path: "/icon",
    sidebar: () => <h2 className="navbar-title">Icon</h2>,
    main: () => <ViewIcon></ViewIcon>
  }
];

const Sidebar = () => {
  return (<aside className="page-sidebar">
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
            <NavLink to="/icon" className="sidebar-link">Icon 图标</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>)
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

const ToTop = withRouter(ScrollToTop)

const Iframe = () => {
  const repoPath = "https://ghbtns.com/github-btn.html?user=yanghuanrong&repo=react&count=true&type="
  const repoBtn = ['watch&v=2','star','fork']
  return (<div>
    {repoBtn.map((item,index) => (
      <iframe src={repoPath+item} title="start" scrolling="0" width="100px" height="20px" className="github-iframe"></iframe>)
    )}
    </div>
  )
}

class App extends Component {

  render() {
    return (<HashRouter>
      <ToTop>
        <div className="page">
          <Sidebar></Sidebar>
          <div className="page-content">
            <header className="navbar m-b">
              {routes.map((route, index) => (<Route path={route.path} component={route.sidebar} key={index}/>))}
              <Iframe></Iframe>
            </header>
            <Switch>
              {routes.map((route, index) => (<Route path={route.path} component={route.main} key={index}/>))}
              <Redirect from="/" to="/button"/>
            </Switch>
          </div>
        </div>
      </ToTop>
    </HashRouter>)
  }
}

export default App;
