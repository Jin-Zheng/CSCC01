import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../styles'
import MultipleAnswerSubmit from '../components/question/multipleAnswerSubmit'
import ShortAnswerSubmit from '../components/question/shortAnswerSubmit'
import Deletor from '../components/question/deletor'

const SHORT_ANSWER = "SA"
const MULTIPLE_CHOICE = 'MC'

class ViewQuizApp extends React.Component {

  componentWillMount() {
    let displayPane = undefined

    if(this.props.type === SHORT_ANSWER) {
      displayPane = (
        <ShortAnswerSubmit
          index={this.props.index}
          value={this.props.value}
          answer={this.props.answer}/>
      )

    } else if (this.props.type === MULTIPLE_CHOICE) {
      displayPane = (
        <multipleAnswerSubmit
          index={this.props.index}
          value={this.props.value}
          answer={this.props.answer}
          option0={this.props.option0}
          option1={this.props.option1}
          option2={this.props.option2}
          option3={this.props.option3}/>
      )
    }
    this.setState({
      value: this.props.value,
      answer: this.props.answer,
      option0: this.props.option0,
      option1: this.props.option1,
      option2: this.props.option2,
      option3: this.props.option3,
      pane: displayPane,
      displayPane: displayPane
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
      answer: undefined,
      option0: undefined,
      option1: undefined,
      option2: undefined,
      option3: undefined,
      pane: undefined
    }
    this.changeState = this.changeState.bind(this)
  }

  render() {
    return(
      <div>
        <Row>
        {this.state.pane}
        </Row>
      </div>
    )
  }
}

export default ViewQuizApp
