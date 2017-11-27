import React from 'react'
import {List, Set, Map} from 'immutable'
import {Row} from 'react-flexbox-grid'
import Styles from '../../styles'

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
        <div style={Styles.viewText}>
          <Row>value:{this.props.data.qValue}</Row>
        </div>
      )
    } else if(type === MULTIPLE_CHOICE) {
      return(
        <div style={Styles.viewText}>
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
      responses: this.props.data.reduce((prev, next) => (
        prev.set(next.qKey, '')
      ), Map())
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      pane: undefined,
      responses: undefined,
      name: ''
    }
    this.handleSpoiler = this.handleSpoiler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeText = this.changeText.bind(this)
    this.calculateGrade = this.calculateGrade.bind(this)
  }

  changeText(field) {
    return (e) => {
      e.preventDefault()
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const metaData = {
      studentUsername: this.state.name,
      grade: this.calculateGrade()
    }
    console.log(metaData.grade)

    fetch('/attemptApi/attempt/insert', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(metaData)
    })
    .then((res) => (
      fetch('/attemptApi/attempt/max')
    ))
    .then((res) => (res.json()))
    .then((res) => (res[0]['MAX(attemptKey)']))
    .then((res) => (
      this.state.responses.mapKeys((key) => {
        const metaData = {
          id: res,
          questionId: key,
          answer: this.state.responses.get(key)
        }
        fetch('/attemptApi/attemptContents/insert/'+res, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(metaData)
        })
      })
    ))
  }

  calculateGrade() {
    const grade = this.state.responses.reduce((prev, val, key) => {
      if(val === this.props.data.filter((q) => (q.qKey === key))[0].answer) {
        return prev + 1
      } else {
        return prev
      }
    },0)
    return (grade*100)/this.state.responses.size
  }


  changeResponse(n) {
    return (e) => {
      e.preventDefault()
      const prev = this.state.responses
      const next = prev.set(n, e.target.value)
      this.setState({
        responses: next
      })
    }
  }

  handleSpoiler(e) {
    e.preventDefault()
    if(this.state.pane) {
      this.setState({pane: undefined})
    } else {

      this.setState({
        pane: this.props.data.map((q) => {
          const saResponse = (
            <Row onChange={this.changeResponse(q.qKey)}
              style={Styles.marginSet}>
              <textarea style={Styles.editQuestionArea}/></Row>
          )
          const mcResponse = (
            <Row style={Styles.marginSet}>
              <select onChange={this.changeResponse(q.qKey)}
                style={Styles.editSelectBar}>
                <option value={''}>
                Which option is correct?
                </option>
                <option value={0}>A</option>
                <option value={1}>B</option>
                <option value={2}>C</option>
                <option value={3}>D</option>
              </select>
            </Row>
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

  render() {
    return(
      <div style={Styles.viewText}>
        <Row>
          {this.props.data[0].quizName}
          <button onClick={this.handleSpoiler}
            style={Styles.smallButton}>spoiler</button>
        </Row>

        {this.state.pane && <div style={Styles.quizBorder}>
          <div>
            <Row style={Styles.viewText}>name:</Row>
            <Row style={Styles.marginSet}><textarea value={this.state.name}
              onChange={this.changeText('name')}
              style={Styles.editQuestionArea}/></Row>
          </div>
          {this.state.pane}
          <div>
            <Row style={Styles.marginSet}><button onClick={this.handleSubmit}
              style={Styles.smallButton}>Submit</button></Row>
          </div>
        </div>}
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
      <div style={Styles.borderSet}>
        {qList}
      </div>
    )
  }
}

export default ListWriteQuiz
