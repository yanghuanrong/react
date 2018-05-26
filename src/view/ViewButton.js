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
      <Col>
        <h3 className="m-b-sm">镂空按钮</h3>
        <div className="card u-flex u-justify-between u-flex-wrap">
          <Button type='success' outline={true}>Success</Button>
          <Button type='primary' outline={true}>Primary</Button>
          <Button type='warning' outline={true}>Warning</Button>
          <Button type='danger' outline={true}>Danger</Button>
          <Button type='info' outline={true}>Info</Button>
        </div>
      </Col>
      <Col>
        <h3 className="m-b-sm">不可用状态</h3>
        <div className="card u-flex u-justify-between u-flex-wrap">
          <Button type='success' disabled={true}>Success</Button>
          <Button type='primary' disabled={true}>Primary</Button>
          <Button type='warning' disabled={true}>Warning</Button>
          <Button type='danger' disabled={true}>Danger</Button>
          <Button type='info' disabled={true}>Info</Button>
        </div>
      </Col>
      <Col>
        <h3 className="m-b-sm">按钮尺寸</h3>
        <div className="card u-flex u-justify-between u-flex-wrap">
          <Button type='success' size='lg'>Large</Button>
          <Button type='default'>default</Button>
          <Button type='primary' size='sm'>Small</Button>
        </div>
      </Col>
      <Col>
        <h3 className="m-b-sm">图标按钮</h3>
        <div className="card u-flex u-justify-between u-flex-wrap">
          <Button type='success' icon='user'>user</Button>
          <Button type='default' icon='github'>github</Button>
          <Button type='primary' icon='music'>music</Button>
        </div>
      </Col>
    </Row>)
  }
}

export default ViewButton
