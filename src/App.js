import React, {Component} from 'react';
import {Button} from './lib/index'

class App extends Component {
  render() {
    return <div>
      <Button type='success'>success</Button>
      <Button type='default'>default</Button>
      <Button type='primary'>primary</Button>
      <Button type='warning'>warning</Button>
      <Button type='danger'>danger</Button>
      <Button type='info'>info</Button>
    </div>
  }
}

export default App;
