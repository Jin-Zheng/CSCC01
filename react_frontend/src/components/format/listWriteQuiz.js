import React from 'react'
import {List, Set} from 'immutable'
import {Row} from 'react-flexbox-grid'

const SHORT_ANSWER = 'SA'
const MULTIPLE_CHOICE = 'MC'

class QuestionPrompt extends React.Component {

  constructor(props) {
    super(props)
    this.paneOf = this.paneOf.bind(this)
  }

  paneOf(type) {
    if(type === SHORT_ANSWER) {
      return(
        <div>
          <Row>value:{this.props.data.qValue}</Row>
        </div>
      )
    } else if(type === MULTIPLE_CHOICE) {
      return(
        <div>
          <Row>value:{this.props.data.qValue}</Row>
          <Row>option A:{this.props.data.candidate1}</Row>
          <Row>option B:{this.props.data.candidate2}</Row>
          <Row>option C:{this.props.data.candidate3}</Row>
          <Row>option D:{this.props.data.candidate4}</Row>
        </div>
      )
    }
  }

  render() {
    return(
      <div>{this.paneOf(this.props.data.qType)}</div>
    )
  }
}

// this is the component that contains the spoiler
class WriteQuiz extends React.Component {

  componentWillMount() {
    this.setState({
      responses: this.props.data.map((res) => (
        undefined
      ))
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      pane: undefined,
      responses: undefined
    }
    this.handleSpoiler = this.handleSpoiler.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  changeText(field, n=undefined) {
    return (e) => {
      e.preventDefault()
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSpoiler(e) {
    console.log('spoiler data:', this.props.data)
    e.preventDefault()
    if(this.state.pane) {
      this.setState({pane: undefined})
    } else {

      this.setState({
        pane: this.props.data.map((q) => {
          const saResponse = (
            <Row><textarea/></Row>
          )
          const mcResponse = (
            <select onChange={this.changeText('answer')}>
              <option value={''}>
              Which option is correct?
              </option>
              <option value={0}>A</option>
              <option value={1}>B</option>
              <option value={2}>C</option>
              <option value={3}>D</option>
            </select>
          )
          return(
            <div>
              <QuestionPrompt data={q}/>
              {q.qType === SHORT_ANSWER && saResponse}
              {q.qType === MULTIPLE_CHOICE && mcResponse}
            </div>
            )
        })
      })
    }
  }

  handleChange(n) {
    return (e) => {
      e.preventDefault()
    }
  }

  render() {
    return(
      <div>
        <Row>
          {this.props.data[0].quizName}
          <button onClick={this.handleSpoiler}>spoiler</button>
        </Row>
        {this.state.pane}
      </div>
    )
  }
}

//this is the componentr that has all of the data
class ListWriteQuiz extends React.Component {

  componentWillMount() {
    fetch('/quizApi/quiz/get/all')
    .then((res) => (res.json()))
    .then((res) => (
      this.setState({data: this.format(res)})
    ))
    .then((res) => (console.log('listWriteQuiz data', this.state.data.toJSON())))
  }

  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
    this.format = this.format.bind(this)
    this.wrap = this.wrap.bind(this)
  }

  format(data) {
    console.log(data)
    const tags = Set(
        data.map((datum) => (
        datum.quizKey
      ))
    )

    const setData = tags.map((tag) => (
      data.filter((datum) => (
        datum.quizKey === tag
      ))
    ))

    const formattedData = List(setData).sort()
    return formattedData
  }

  wrap(q) {
    return(
      <WriteQuiz data={q}/>
    )
  }

  render() {
    let qList = undefined
    if(this.state.data) {
      qList = this.state.data.map(this.wrap)
    }
    return(
      <div>
        {qList}
      </div>
    )
  }
}

export default ListWriteQuiz
