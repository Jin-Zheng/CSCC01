import React from 'react'
import {Row} from 'react-flexbox-grid'

class QuizDisplay extends React.Component {

  componentWillMount() {
    this.setState({
      index: this.props.data.index,
      questions: this.props.data.questions
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      index: undefined,
      pane: undefined,
      questions: undefined
    }
    this.wrap = this.wrap.bind(this)
    this.handleSpoiler = this.handleSpoiler.bind(this)
  }

  handleSpoiler(e) {
    if(this.state.pane) {
      this.setState({pane: undefined})
    } else {
      this.setState({pane: this.state.questions.map(this.wrap)})
    }
  }

  wrap(q) {
    return (
      <div>
        this is a question wrapper
      </div>
    )
  }

  render() {
    return (
      <div>
        <Row>
          Quiz: {this.sate.index}
          <button onClick={(e)=>(e.preventDefault())}>
            spoiler
          </button>
        </Row>
      </div>
    )
  }
}

class ListQuizzes extends React.Component {

  componentWillMount() {
    console.log('hi')
    fetch('/quizApi/quiz/get/all')
    .then((res) => (res.json()))
    .then((res) => (this.setState({quizzes: res})))
    .catch((err) => (console.log(err)))
  }

  constructor(props) {
    super(props)
    this.state = {
      quizzes: undefined
    }
    this.wrap =this.wrap.bind(this)
  }

  wrap(q) {
    return(
      <QuizDisplay data={q}/>
    )
  }

  render() {
    let qList = undefined
    if(this.state.quizzes) {
      qList = this.state.quizzes.map(this.wrap)
    }
    return(
      <Row>
        {JSON.stringify(this.state.quizzes)}
      </Row>
    )
  }
}

export default ListQuizzes
