import React, {Component} from 'react'
import {Button, Row, Col} from '../lib/index'

class ViewButton extends Component {
  render() {
    return (<Row>
      <Col>
        <h3 className="m-b-sm">按钮类型</h3>
        <div className="card u-flex u-justify-between u-flex-wrap">
          <Button type='success'>Success</Button>
          <Button type='primary'>Primary</Button>
          <Button type='warning'>Warning</Button>
          <Button type='danger'>Danger</Button>
          <Button type='info'>Info</Button>
        </div>
      </Col>
    </Row>)
  }
}

export default ViewAffix
