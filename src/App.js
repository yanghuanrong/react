import React, {Component} from 'react';
import {Button,Spinner} from './lib/index'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 5
    }
  }
  onChange(parmas){
    this.setState({
      value:parmas
    })
    console.log(parmas);
  }
  render() {
    return <div>
      <div>
        <Button type='success'>success</Button>
        <Button type='default'>default</Button>
        <Button type='primary'>primary</Button>
        <Button type='warning'>warning</Button>
        <Button type='danger'>danger</Button>
        <Button type='info'>info</Button>
      </div>
      <div>
        <Button type='success' size='lg'>success</Button>
        <Button type='default'>default</Button>
        <Button type='primary' size='sm'>primary</Button>
        <Button type='warning' size='xs'>warning</Button>
      </div>
      <div>
        <Spinner value={this.state.value} onChange={this.onChange.bind(this)}></Spinner>
      </div>
    </div>
  }
}

export default App;
