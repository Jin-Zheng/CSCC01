import React from 'react'
import ReactDOM from 'react-dom'
import PaneController from './components/paneController.js'
import Styles from './styles.js'
import {Row, Col} from 'react-flexbox-grid'

class Index extends React.Component {
  render() {
    return (
      <div>
      <Row style={Styles.title}>
        Lambda-Work
        <p/>
      </Row>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1}>
        </Col>
        <Col xs={11} sm={11} md={11} lg={11}>
          <PaneController/>
        </Col>
      </Row>
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'))
