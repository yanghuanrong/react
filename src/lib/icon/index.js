import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less'

class Icon extends Component {
  static propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
  }
  render() {
    let {type,style} = this.props
    if(type !== undefined){
      type = `icon-${type}`
      return <i className={`icon ${type}`} {...style}></i>
    }
  }
}

export default Icon;
