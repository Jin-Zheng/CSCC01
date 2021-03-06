import React from 'react'
import {Row} from 'react-flexbox-grid'
import {Set, List} from 'immutable'
import ShortAnswerSubmit from '../question/shortAnswerSubmit'
import MultipleAnswerSubmit from '../question/multipleAnswerSubmit'
import Styles from '../../styles'

const SHORT_ANSWER = 'SA'
const MULTIPLE_CHOICE = 'MC'

class GetQuestionDisplay extends React.Component {
  render() {
    let res = undefined
    if(this.props.data.qType === SHORT_ANSWER) {
      res = (
        <ShortAnswerSubmit
          index = {this.props.data.qKey}
          value = {this.props.data.qValue}
          answer = {this.props.data.answer}/>
      )
    } else if(this.props.data.qType === MULTIPLE_CHOICE) {
      res = (
        <MultipleAnswerSubmit
          index = {this.props.data.qKey}
          value = {this.props.data.qValue}
          answer = {this.props.data.answer}
          option0 = {this.props.data.candidate1}
          option1 = {this.props.data.candidate2}
          option2 = {this.props.data.candidate3}
          option3 = {this.props.data.candidate4}/>
      )
    }
    return(
      <div>
        {res}
      </div>
    )
  }
}

class QuizDisplay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pane: undefined
    }
    this.wrap = this.wrap.bind(this)
    this.handleSpoiler = this.handleSpoiler.bind(this)
  }

  handleSpoiler(e) {
    e.preventDefault()
    if(this.state.pane) {
      this.setState({pane: undefined})
    } else {
      this.setState({pane: this.props.data.map(this.wrap)})
    }
  }

  wrap(q) {
    return (
      <div style={Styles.borderSet}>
        <form style = {Styles.questionBorder}>
          <GetQuestionDisplay data={q}/>
          <button type={'submit'}
            style={Styles.smallButton}>
            Submit
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div style={Styles.viewText}>
        <Row>
          Quiz: {this.props.data[0].quizName}
          <button onClick={this.handleSpoiler}
            style={Styles.smallButton}>
            spoiler
          </button>
        </Row>
        {this.state.pane}
      </div>
    )
  }
}

class ListStudentQuiz extends React.Component {

  componentWillMount() {
    fetch('/quizApi/quiz/get/all/')
    .then((res) => (res.json()))
    .then((res) => (
      this.setState({quizzes: this.format(res)})
    ))
    .catch((err) => (console.log(err)))
  }

  constructor(props) {
    super(props)
    this.state = {
      quizzes: undefined
    }
    this.wrap = this.wrap.bind(this)
    this.format = this.format.bind(this)
  }

  format(data) {
    const tags = Set(
        data.map((datum) => (
        datum.quizKey
      ))
    )

    const setData = tags.map((tag) => (
      data.filter((datum) => (
        datum.quizKey !== tag
      ))
    ))

    const formattedData = List(setData).sort()
    return formattedData
  }

  wrap(q) {
    return(
      <QuizDisplay key={q.quizKey} data={q}/>
    )
  }

  render() {
    let qList = undefined
    if(this.state.quizzes) {
      qList = this.state.quizzes.map(this.wrap)
    }
    return(
      <div>
        {qList}
      </div>
    )
  }
}

export default ListStudentQuiz
