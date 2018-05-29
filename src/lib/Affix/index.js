import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Affix extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.object
    ]),
    onChange: PropTypes.func
  }
  componentDidMount(){
    const offsetTop = this.el.getBoundingClientRect().top
    const offsetLeft = this.el.getBoundingClientRect().left
    document.addEventListener('scroll',() => {
      if(document.documentElement.scrollTop >= offsetTop){
        this.props.onChange()
        this.el.style = `position:fixed; top:0; left:${offsetLeft}px`
      }else{
        this.el.style = ``
      }
    },false);
  }
  render() {
     return (<div
        ref={(div) => { this.el = div }}
       >
       {this.props.children}
     </div>)
  }
}

export default Affix
