import React from 'react'
import Styles from './styles.js'
import {Row, Col} from 'react-flexbox-grid'
import {BrowserRouter} from 'react-router-dom'
import MainController from './components/mainController'
import MainContents from './components/mainContents'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row style={Styles.title}>
          Lambda-Work
          <p/>
        </Row>
        <Row center={'xs'}>

          <Col xs={3} sm={3} md={3} lg={3}>
            <MainController/>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7}>
            <MainContents/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
