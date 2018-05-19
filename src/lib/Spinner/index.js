import React, {Component} from 'react';
import Button from '../button/index'
import './style.less'

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  add() {
    let a = this.state.value
    a++
    this.setState({value: a})
    this.onChange(a)
  }
  remove() {
    let a = this.state.value
    a--
    this.setState({value: a})
    this.onChange(a)
  }
  onChange(a) {
    this.props.onChange(a)
  }
  render() {
    return <div className="input-group">
      <Button type="default" onClick={() => this.remove()}>-</Button>
      <input className='form-control' type="text" onChange={() => this.onChange()} value={this.state.value}/>
      <Button type="default" onClick={() => this.add()}>+</Button>
    </div>
  }
}

export default Spinner
