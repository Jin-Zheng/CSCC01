import React from 'react'
import ReactDOM from 'react-dom'
import PaneController from './components/paneController.js'
import Styles from './styles.js'
import {Row, Col, Grid} from 'react-flexbox-grid'

class Index extends React.Component {
  render() {
    return (
      <Grid>
        <Row style={Styles.title}>
          Lambda-Work
          <p/>
        </Row>
        <Row center={'xs'}>

          <Col xs={10} sm={10} md={8} lg={8}>
            <PaneController/>
          </Col>

        </Row>
      </Grid>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'))
