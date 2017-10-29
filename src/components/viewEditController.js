import React from 'react'
import {Row} from 'react-flexbox-grid'
import EditShortAnswer from './editShortAnswer.js'

class ViewEditController extends React.Component {

  componentWillMount() {
    this.setState({pane:<EditShortAnswer/>})
  }

  constructor(props) {
    super(props)
    this.state = {
      pane: undefined
    }
  }

  changeState(obj) {
    return (e) => {
      e.preventDefault()
      this.setState(obj)
    }
  }

  render() {
    return (
      <div>
        <Row>
          <button onClick={this.changeState({pane: 'nothing yet'})}>
            view
          </button>

          <button onClick={this.changeState({pane: <EditShortAnswer/>})}>
            edit
          </button>
        </Row>
        <Row>
          {this.state.pane}
        </Row>
      </div>
    )
  }
}

export default ViewEditController
