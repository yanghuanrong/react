import React, {Component} from 'react'
import {Affix, Button, Row, Col} from '../lib/index'

class ViewAffix extends Component {
  affixFn(){
    console.log(1)
  }
  render() {
    return (
      <div style={{height:"5000px"}}>
        <Row>
          <Col>
            <h3 className="m-b-sm">固钉</h3>
            <div className="card">
              <Affix onChange={() => this.affixFn()}>
                  <Button type='info'>Affix top</Button>
              </Affix>
            </div>
        </Col>
      </Row>
    </div>
    )
  }
}

export default ViewAffix
