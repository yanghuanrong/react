import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style/style.less';
// import './assets/js/rem.js';
// import App from './App';

import registerServiceWorker from './registerServiceWorker';



const data = [{
    checked:true,
    title:"111111",
},{
    checked:false,
    title:"2222",
}]

class Logo extends Component{
    render(){
        return (
            <div className="logo-wrap">
                <div className="logo">hello,world</div>
                <p className="description">welcome to Super React, my React 666</p>
            </div>
        )
    }
}

class Handle extends Component{
    render(){
        return (
            <div className="handle">
                <label>
                    <input type="checkbox"/>
                    全选
                </label>
                <button>全部删除</button>
            </div>
        )
    }
}

class Item extends Component{
    render(){
        return (
            <li>
                <input type="checkbox" checked={this.props.checked}/>
                <span>{this.props.title}</span>
                <input type="text"/>
                <div className="close">X</div>
            </li>
        )
    }
}

class Body extends Component{
    render(){
        let data = this.props.data.map( (el,i) => <Item key={i} {...el}/>);

        return (
            <div>
                <input type="text" className="input" placeholder="请输入你的梦想..."/>
                <Handle/>
                <ul className="list">
                    {data}
                </ul>
            </div>
        )
    }
}

class App extends Component{
    render(){
        return (
            <div className="wrap">
                <Logo/>
                <Body data={data}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));

registerServiceWorker();

