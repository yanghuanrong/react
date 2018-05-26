import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less'

class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return <div className="container"><div className="row">{this.props.children}</div></div>
  }
}

export default Row;
