import React from 'react'
import Styles from '../styles'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter} from 'react-router-dom'
import MainRouter from '../routers/mainRouter'
import MainSwitcher from '../switchers/mainSwitcher'

class MainApp extends React.Component {
  render() {
    return (
      <div>
        <Row style={Styles.title}>
          Lambda-Work
          <p/>
        </Row>
        <Row center={'xs'}>

          <Col xs={3} sm={3} md={3} lg={3}>
            <MainRouter/>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7}>
            <MainSwitcher/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MainApp
