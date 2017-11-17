import React from 'react'
import {List, Set} from 'immutable'
import ShortAnswerDisplay from '../question/shortAnswerDisplay'
import MultipleAnswerDisplay from '../question/multipleAnswerDisplay'
import {Row, Col} from 'react-flexbox-grid'

const SHORT_ANSWER = 'SA'
const MULTIPLE_CHOICE = 'MC'

class GetQuestionDisplay extends React.Component {

  componentWillMount() {
    let pane = undefined
    if (this.props.data.qType === SHORT_ANSWER) {
      pane = (
        <ShortAnswerDisplay
          value = {this.props.data.qValue}
          answer = {this.props.data.answer}
          index = {this.props.data.qKey}/>
      )
    } else if (this.props.qType === MULTIPLE_CHOICE) {
      pane = (
        <MultipleAnswerDisplay
          value = {this.props.data.qValue}
          answer = {this.props.data.answer}
          index = {this.props.data.qKey}
          option0 = {this.props.data.candidate1}
          option1 = {this.props.data.candidate2}
          option2 = {this.props.data.candidate3}
          option3 = {this.props.data.candidate4}/>
      )
    }

    this.setState({
      pane: pane
    })
  }

  render() {
    return (
      <div>
        {this.state.pane}
      </div>
    )
  }
}

class SelectQuestions extends React.Component {
  componentWillMount() {
    fetch('/questionApi/get/all')
    .then((res) => (
      res.json()
    )).then((res) => (
      this.setState(
        {
          questions: res.reduce((prev, next) => (
            prev[next.qKey] = next
          ), {}),
          selected: res.reduce((prev, next) => (
            prev[next.qKey] = false
          ), {})
        }
      )
    )).catch((err)=>(
      console.log(err)
    ))
  }

  constructor(props) {
    super(props)
    this.wrap = this.wrap.bind(this)
    this.state = {
      questions: undefined,
      selected: undefined
    }
  }

  checkItem(n) {
    return (e) => {
      e.preventDefault()
      // check to see if this works
      this.setState({selected: {n: !e.target.selected}})
      console.log(this.state.selected)
    }
  }

  wrap(q) {
    return (
      <Row>
        <Col xs={11} sm={11} md={11} lg={11}>
          <GetQuestionDisplay data={q}/>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          <input type='checkbox' onClick={this.checkItem(q.qKey)}/>
        </Col>
      </Row>
    )
  }

  render() {
    let qList = undefined
    if (this.state.questions) {
      qList = this.state.questions.map(this.wrap)
    }
    return(
      <div>
        {qList}
      </div>
    )
  }
}

export default SelectQuestions
