import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './style.less'

class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.string,
  }
  classNames(type,size,outline,disabled){
    type = type !== undefined ? `btn-${type}` : "";
    size = size !== undefined ? `btn-${size}` : "";
    outline = outline !== undefined || outline ? `btn-outline` : "";
    disabled = disabled !== undefined || disabled ? 'disabled' : "";

    return `btn ${type} ${size} ${outline} ${disabled}`.replace(/(^\s*)|(\s*)$/g,"")
  }
  propsFn(){
    let value = ['type','size','children','outline']
    let props = {}
    for(let item in this.props){
      if(value.indexOf(item) === -1){
        props[item] = this.props[item]
      }
    }
    return props
  }
  propsIcon(parmas){
    if(parmas !== undefined){
      return <Icon type={parmas}></Icon>
    }
  }
  render() {
    let {type,size,children,disabled,outline,href,icon} = this.props
    let Component = href ? 'a' : 'button'
    let a = {}
    if(Component === 'a'){
      a.role = 'button'
    }

    return <Component
      className={this.classNames(type,size,outline,disabled)}
      {...a}
      {...this.propsFn()}
    >
      {this.propsIcon(icon)} {children}
    </Component>
  }
}

export default Button;
