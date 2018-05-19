import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less'

class Button extends Component {
  render() {
    let {type = '',size = '',children} = this.props
    if(type !== ''){
      type = `btn-${type}`
    }
    if(size !== ''){
      size = `btn-${size}`
    }
    return <button className={`btn ${type} ${size}`} onClick={this.props.onClick}>{children}</button>
  }
}

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
