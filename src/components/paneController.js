import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import FormatListView from './formatListView.js'
import {List} from 'immutable'

class PaneController extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={4} sm={4} md={3} lg={3}>
            <FormatListView list={this.props.buttons}/>
          </Col>
          <Col xs={8} sm={8} md={3} lg={3}>
            <FormatListView list={List(['generic', 'pane', 'objects'])}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PaneController
