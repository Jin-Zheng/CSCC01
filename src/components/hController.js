import React from 'react'
import {Row} from 'react-flexbox-grid'

class Hcontroller extends React.Component {

  componentWillMount() {
    this.state.buttons = this.props.buttons
    this.state.panes = this.props.panes
    this.state.start = this.props.start
  }

  constructor(props) {
    super(props)
    this.state = {
      buttons: undefined,
      panes: undefined,
      start: undefined
    }
  }

  render() {
    return (
      <Row>
        this is an Hcontroller
      </Row>
    )
  }
}

export default Hcontroller
