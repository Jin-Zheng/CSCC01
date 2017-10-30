import {Col, Row} from 'react-flexbox-grid'
import FormatListView from './formatListView'
import {List} from 'immutable'
import QuestionController from './questionController'
import React from 'react'
import ViewEditController from './viewEditController'
import ShortAnswerDisplay from './shortAnswerDisplay'
import MulitipleAnswerDisplay from './mulitipleAnswerDisplay'
import ShortAnswerEditor from './shortAnswerEditor'

class PaneController extends React.Component {

  componentWillMount() {
    this.setState({pane:this.props.start}),
    this.setState({buttons:List([
      <button onClick={this.changeState({pane:<QuestionController/>})}>
        create question
      </button>,
      <button onClick={this.changeState({pane:'wip'})}>
        view/edit
      </button>,
      <button onClick={this.changeState({pane:<ViewEditController/>})}>
        sample view/edit
      </button>,
      <button onClick={this.changeState({pane:<ShortAnswerDisplay/>})}>
        SA diplay
      </button>,
      <button onClick={this.changeState({pane:<MulitipleAnswerDisplay/>})}>
        MC display
      </button>,
      <button onClick={this.changeState({pane:<ShortAnswerEditor/>})}>
        SA edit
      </button>
    ])})
  }

  constructor(props) {
    super(props)

    this.changeState = this.changeState.bind(this)
    this.state = {
      pane: undefined,
      buttons: (
        List([])
      )
    }
  }

  changeState(obj) {
    return (event) => {
      event.preventDefault()
      this.setState(obj)
    }
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={3} sm={3} md={2} lg={2}>
            <FormatListView list={this.state.buttons}/>
          </Col>
          <Col xs={9} sm={9} md={10} lg={10}>
            {this.state.pane}
          </Col>
        </Row>
      </div>
    )
  }
}

export default PaneController
