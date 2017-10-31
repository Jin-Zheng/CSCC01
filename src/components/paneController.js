import {Col, Row, Grid} from 'react-flexbox-grid'
import FormatListView from './formatListView'
import {List} from 'immutable'
import QuestionController from './questionController'
import React from 'react'
import ViewEditController from './viewEditController'
import ShortAnswerDisplay from './shortAnswerDisplay'
import MulitipleAnswerDisplay from './mulitipleAnswerDisplay'
import McEditor from './mcEditor'
import ShortAnswerEditor from './shortAnswerEditor'
import Styles from '../styles'
import CreateShortAnswer from './createShortAnswer'

class PaneController extends React.Component {

  componentWillMount() {
    this.setState({pane:this.props.start}),
    this.setState({buttons:List([
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:<QuestionController/>})}>
        create question
      </button>,
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:'wip'})}>
        view/edit
      </button>,
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:<ViewEditController/>})}>
        sample view/edit
      </button>,
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:<ShortAnswerDisplay/>})}>
        SA diplay
      </button>,
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:<MulitipleAnswerDisplay/>})}>
        MC display
      </button>,
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:<ShortAnswerEditor/>})}>
        SA edit
      </button>,
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:<McEditor/>})}>
        MC edit
      </button>,
      <button
        style={Styles.vNavButton}
        onClick={this.changeState({pane:<CreateShortAnswer/>})}>
        create SA
      </button>
    ])})
  }

  constructor(props) {
    super(props)

    this.changeState = this.changeState.bind(this)
    this.state = {
      pane: undefined,
      buttons: undefined
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
      <Grid>
        <Row>
          <Col xs={3} sm={3} md={2} lg={2}>
            <FormatListView list={this.state.buttons}/>
          </Col>
          <Col xs={9} sm={9} md={10} lg={10}>
            {this.state.pane}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PaneController
