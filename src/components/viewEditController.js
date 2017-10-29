import React from 'react'
import {Row} from 'react-flexbox-grid'

class ViewEditController extends React.Component {

  componentWillMount() {
    this.setState({pane:this.props.start})
  }

  constructor(props) {
    super(props)
    this.state = {
      pane: undefined
    }
  }

  render() {
    return (
      <Row>
        <button>
          view
        </button>

        <button>
          edit
        </button>
      </Row>
    )
  }
}
