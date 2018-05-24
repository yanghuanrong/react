import React, {Component} from 'react';
import {Button, Icon, Row, Col} from './lib/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 5
    }
  }
  onChange(parmas) {
    this.setState({value: parmas})
    console.log(parmas);
  }
  render() {
    return <Row>
      <Col span={6}>
        <div className="m-b">
          <Button type='success'>Success</Button>
          <Button type='primary'>Primary</Button>
          <Button type='warning'>Warning</Button>
          <Button type='danger'>Danger</Button>
          <Button type='info'>Info</Button>
        </div>
      </Col>
      <Col span={6} offset={2}>
        <div className="m-b">
          <Button type='success' outline={true}>Success</Button>
          <Button type='primary' outline={true}>Primary</Button>
          <Button type='warning' outline={true}>Warning</Button>
          <Button type='danger' outline={true}>Danger</Button>
          <Button type='info' outline={true}>Info</Button>
        </div>
      </Col>
      <Col span={6}>
        <div className='m-b'>
          <Button type='success' disabled={true}>Success</Button>
          <Button type='primary' disabled={true}>Primary</Button>
          <Button type='warning' disabled={true}>Warning</Button>
          <Button type='danger' disabled={true}>Danger</Button>
          <Button type='info' disabled={true}>Info</Button>
        </div>
      </Col>
      <Col span={6}>
        <div className="m-b">
          <Button type='success' size='lg'>Large</Button>
          <Button type='default'>default</Button>
          <Button type='primary' size='sm'>Small</Button>
        </div>
      </Col>
      <Col span={6}>
        <div className="m-b">
          <Button type='success' icon='user'>user</Button>
          <Button type='default' icon='github'>github</Button>
          <Button type='primary' icon='music'>music</Button>
        </div>
      </Col>
      <Col span={6}>
        <div className="m-b">
          <Icon type="heart-on"></Icon>
          <Icon type="star-on"></Icon>
          <Icon type="sliders"></Icon>
          <Icon type="gitlab"></Icon>
          <Icon type="maximize"></Icon>
          <Icon type="minimize"></Icon>
          <Icon type="wifi-off"></Icon>
          <Icon type="tv"></Icon>
          <Icon type="shopping-cart"></Icon>
          <Icon type="paperclip"></Icon>
          <Icon type="help-circle"></Icon>
          <Icon type="crop"></Icon>
          <Icon type="bold"></Icon>
          <Icon type="italic"></Icon>
          <Icon type="underline"></Icon>
          <Icon type="headphones"></Icon>
          <Icon type="hash"></Icon>
          <Icon type="cloud"></Icon>
          <Icon type="command"></Icon>
          <Icon type="zoom-out"></Icon>
          <Icon type="zoom-in"></Icon>
          <Icon type="zap"></Icon>
          <Icon type="x-circle"></Icon>
          <Icon type="x"></Icon>
          <Icon type="wind"></Icon>
          <Icon type="x-square"></Icon>
          <Icon type="wifi"></Icon>
          <Icon type="watch"></Icon>
          <Icon type="volume"></Icon>
          <Icon type="volume-1"></Icon>
          <Icon type="volume-2"></Icon>
          <Icon type="volume-x"></Icon>
          <Icon type="voicemail"></Icon>
          <Icon type="video"></Icon>
          <Icon type="video-off"></Icon>
          <Icon type="users"></Icon>
          <Icon type="user"></Icon>
          <Icon type="user-x"></Icon>
          <Icon type="user-plus"></Icon>
          <Icon type="user-minus"></Icon>
          <Icon type="user-check"></Icon>
          <Icon type="unlock"></Icon>
          <Icon type="upload-cloud"></Icon>
          <Icon type="umbrella"></Icon>
          <Icon type="upload"></Icon>
          <Icon type="twitter"></Icon>
          <Icon type="type"></Icon>
          <Icon type="triangle"></Icon>
          <Icon type="triangle-down"></Icon>
          <Icon type="triangle-up"></Icon>
          <Icon type="trash"></Icon>
          <Icon type="trash-2"></Icon>
          <Icon type="toggle-right"></Icon>
          <Icon type="toggle-left"></Icon>
          <Icon type="thumbs-down"></Icon>
          <Icon type="thumbs-up"></Icon>
          <Icon type="thermometer"></Icon>
          <Icon type="target"></Icon>
          <Icon type="sunset"></Icon>
          <Icon type="tag"></Icon>
          <Icon type="tablet"></Icon>
          <Icon type="sunrise"></Icon>
          <Icon type="sun"></Icon>
          <Icon type="stop-circle"></Icon>
          <Icon type="star"></Icon>
          <Icon type="speaker"></Icon>
          <Icon type="square"></Icon>
          <Icon type="smartphone"></Icon>
          <Icon type="slash"></Icon>
          <Icon type="slack"></Icon>
          <Icon type="skip-forward"></Icon>
          <Icon type="sidebar"></Icon>
          <Icon type="shuffle"></Icon>
          <Icon type="skip-back"></Icon>
          <Icon type="settings"></Icon>
          <Icon type="shield"></Icon>
          <Icon type="share"></Icon>
          <Icon type="share-2"></Icon>
          <Icon type="scissors"></Icon>
          <Icon type="server"></Icon>
          <Icon type="search"></Icon>
          <Icon type="save"></Icon>
          <Icon type="rotate-cw"></Icon>
          <Icon type="refresh-cw"></Icon>
          <Icon type="rotate-ccw"></Icon>
          <Icon type="rewind"></Icon>
          <Icon type="refresh-ccw"></Icon>
          <Icon type="repeat"></Icon>
          <Icon type="radio"></Icon>
          <Icon type="power"></Icon>
          <Icon type="printer"></Icon>
          <Icon type="pocket"></Icon>
          <Icon type="plus"></Icon>
          <Icon type="plus-circle"></Icon>
          <Icon type="plus-square"></Icon>
          <Icon type="play"></Icon>
          <Icon type="play-circle"></Icon>
          <Icon type="pie-chart"></Icon>
          <Icon type="phone-outgoing"></Icon>
          <Icon type="phone"></Icon>
          <Icon type="phone-incoming"></Icon>
          <Icon type="phone-off"></Icon>
          <Icon type="phone-missed"></Icon>
          <Icon type="phone-forwarded"></Icon>
          <Icon type="phone-call"></Icon>
          <Icon type="percent"></Icon>
          <Icon type="pause"></Icon>
          <Icon type="pause-circle"></Icon>
          <Icon type="package"></Icon>
          <Icon type="octagon"></Icon>
          <Icon type="navigation"></Icon>
          <Icon type="navigation-2"></Icon>
          <Icon type="music"></Icon>
          <Icon type="move"></Icon>
          <Icon type="more-horizontal"></Icon>
          <Icon type="more-vertical"></Icon>
          <Icon type="monitor"></Icon>
          <Icon type="moon"></Icon>
          <Icon type="minus"></Icon>
          <Icon type="minus-square"></Icon>
          <Icon type="mic"></Icon>
          <Icon type="minus-circle"></Icon>
          <Icon type="mic-off"></Icon>
          <Icon type="minimize-2"></Icon>
          <Icon type="message-square"></Icon>
          <Icon type="message-circle"></Icon>
          <Icon type="menu"></Icon>
          <Icon type="map-pin"></Icon>
          <Icon type="map"></Icon>
          <Icon type="maximize-2"></Icon>
          <Icon type="mail"></Icon>
          <Icon type="loader"></Icon>
          <Icon type="log-out"></Icon>
          <Icon type="lock"></Icon>
          <Icon type="list"></Icon>
          <Icon type="log-in"></Icon>
          <Icon type="link"></Icon>
          <Icon type="life-buoy"></Icon>
          <Icon type="link-2"></Icon>
          <Icon type="layout"></Icon>
          <Icon type="instagram"></Icon>
          <Icon type="info"></Icon>
          <Icon type="layers"></Icon>
          <Icon type="inbox"></Icon>
          <Icon type="image"></Icon>
          <Icon type="github"></Icon>
          <Icon type="home"></Icon>
          <Icon type="heart"></Icon>
          <Icon type="grid"></Icon>
          <Icon type="globe"></Icon>
          <Icon type="flag"></Icon>
          <Icon type="filter"></Icon>
          <Icon type="folder"></Icon>
          <Icon type="file-plus"></Icon>
          <Icon type="file"></Icon>
          <Icon type="film"></Icon>
          <Icon type="file-text"></Icon>
          <Icon type="fast-forward"></Icon>
          <Icon type="eye-off"></Icon>
          <Icon type="file-minus"></Icon>
          <Icon type="facebook"></Icon>
          <Icon type="feather"></Icon>
          <Icon type="eye"></Icon>
          <Icon type="external-link"></Icon>
          <Icon type="edit-1"></Icon>
          <Icon type="edit"></Icon>
          <Icon type="edit-2"></Icon>
          <Icon type="droplet"></Icon>
          <Icon type="download"></Icon>
          <Icon type="download-cloud"></Icon>
          <Icon type="delete"></Icon>
          <Icon type="disc"></Icon>
          <Icon type="crosshair"></Icon>
          <Icon type="credit-card"></Icon>
          <Icon type="cpu"></Icon>
          <Icon type="corner-right-up"></Icon>
          <Icon type="corner-right-down"></Icon>
          <Icon type="corner-up-right"></Icon>
          <Icon type="corner-up-left"></Icon>
          <Icon type="corner-left-up"></Icon>
          <Icon type="corner-left-down"></Icon>
          <Icon type="corner-down-left"></Icon>
          <Icon type="corner-down-right"></Icon>
          <Icon type="copy"></Icon>
          <Icon type="compass"></Icon>
          <Icon type="cloud-snow"></Icon>
          <Icon type="codepen"></Icon>
          <Icon type="cloud-off"></Icon>
          <Icon type="cloud-rain"></Icon>
          <Icon type="cloud-drizzle"></Icon>
          <Icon type="cloud-lightning"></Icon>
          <Icon type="clock"></Icon>
          <Icon type="chrome"></Icon>
          <Icon type="clipboard"></Icon>
          <Icon type="circle"></Icon>
          <Icon type="chevrons-left"></Icon>
          <Icon type="chevrons-up"></Icon>
          <Icon type="chevrons-right"></Icon>
          <Icon type="chevrons-down"></Icon>
          <Icon type="chevron-up"></Icon>
          <Icon type="chevron-right"></Icon>
          <Icon type="chevron-left"></Icon>
          <Icon type="chevron-down"></Icon>
          <Icon type="cast"></Icon>
          <Icon type="check-square"></Icon>
          <Icon type="check"></Icon>
          <Icon type="check-circle"></Icon>
          <Icon type="camera"></Icon>
          <Icon type="box"></Icon>
          <Icon type="bookmark"></Icon>
          <Icon type="calendar"></Icon>
          <Icon type="camera-off"></Icon>
          <Icon type="briefcase"></Icon>
          <Icon type="book"></Icon>
          <Icon type="bell"></Icon>
          <Icon type="bluetooth"></Icon>
          <Icon type="battery"></Icon>
          <Icon type="bell-off"></Icon>
          <Icon type="battery-charging"></Icon>
          <Icon type="bar-chart-2"></Icon>
          <Icon type="bar-chart"></Icon>
          <Icon type="award"></Icon>
          <Icon type="arrow-up"></Icon>
          <Icon type="arrow-up-right"></Icon>
          <Icon type="arrow-up-left"></Icon>
          <Icon type="arrow-down"></Icon>
          <Icon type="arrow-right"></Icon>
          <Icon type="arrow-left"></Icon>
          <Icon type="aperture"></Icon>
          <Icon type="anchor"></Icon>
          <Icon type="arrow-down-right"></Icon>
          <Icon type="arrow-down-left"></Icon>
          <Icon type="align-right"></Icon>
          <Icon type="align-left"></Icon>
          <Icon type="align-justify"></Icon>
          <Icon type="airplay"></Icon>
          <Icon type="align-center"></Icon>
          <Icon type="alert-triangle"></Icon>
          <Icon type="activity"></Icon>
          <Icon type="alert-circle"></Icon>
          <Icon type="alert-octagon"></Icon>
        </div>
      </Col>
    </Row>
  }
}

export default App;
