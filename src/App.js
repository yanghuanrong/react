import React, {Component} from 'react';
import {Button} from './lib/index'

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
      <div className="m-b">
        <Button type='success'>Success</Button>
        <Button type='primary'>Primary</Button>
        <Button type='warning'>Warning</Button>
        <Button type='danger'>Danger</Button>
        <Button type='info'>Info</Button>
      </div>
      <div className="m-b">
        <Button type='success' outline={true}>Success</Button>
        <Button type='primary' outline={true}>Primary</Button>
        <Button type='warning' outline={true}>Warning</Button>
        <Button type='danger' outline={true}>Danger</Button>
        <Button type='info' outline={true}>Info</Button>
      </div>
      <div className='m-b'>
        <Button type='success' disabled={true}>Success</Button>
        <Button type='primary' disabled={true}>Primary</Button>
        <Button type='warning' disabled={true}>Warning</Button>
        <Button type='danger' disabled={true}>Danger</Button>
        <Button type='info' disabled={true}>Info</Button>
      </div>
      <div className="m-b">
        <Button type='success' size='lg'>Large</Button>
        <Button type='default'>default</Button>
        <Button type='primary' size='sm'>Small</Button>
      </div>
    </div>
  }
}

export default App;
