import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less'

class Col extends Component {
  static propTypes = {
    ...this.typeProps,
    lg: PropTypes.number || PropTypes.shape(...this.typeProps),
    md: PropTypes.number || PropTypes.shape(...this.typeProps),
    sm: PropTypes.number || PropTypes.shape(...this.typeProps),
    xl: PropTypes.number || PropTypes.shape(...this.typeProps),
  }
  typeProps = {
    span: PropTypes.number,
    offset: PropTypes.number,
    order: PropTypes.number,
  }
  classNames(span = 12, offset, order){
    span = `col-${span}`;
    offset = offset !== undefined ? `offset-${offset}` : "";
    order = order !== undefined ? `order-${order}` : "";

    return `${span} ${offset} ${order}`.replace(/(^\s*)|(\s*)$/g,"")
  }
  render() {
    let {span, offset, order, children} = this.props
    return <div className={this.classNames(span, offset, order)}>{children}</div>
  }
}

export default Col;
