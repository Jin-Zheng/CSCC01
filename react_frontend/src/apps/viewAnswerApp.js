import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../styles'
//import MultipleAnswerSubmit from '../components/question/multipleAnswerSubmit'
import ShortAnswerDisplay from '../components/question/shortAnswerDisplay'
import ShortAnswerSubmit from '../components/question/shortAnswerSubmit'
import MultipleAnswerDisplay from '../components/question/multipleAnswerDisplay'
import Deletor from '../components/question/deletor'

const SHORT_ANSWER = "SA"
const MULTIPLE_CHOICE = 'MC'

class ViewAnswerApp extends React.Component {

  componentWillMount() {
    let viewPane = undefined
    let answerPane = undefined

    if(this.props.type === SHORT_ANSWER) {
      viewPane = (
        <ShortAnswerDisplay
          index={this.props.index}
          value={this.props.value}
          answer={this.props.answer}/>
      )
    } else if (this.props.type === MULTIPLE_CHOICE) {
      viewPane = (
        <MultipleAnswerDisplay
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
      pane: viewPane,
      viewPane: viewPane
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

  changeState(obj) {
    return (e) => {
      e.preventDefault()
      console.log(obj)
      this.setState(obj)
    }
  }

  render() {

    return(
      <div>
        <Row>
          <button onClick={this.changeState({pane:this.state.viewPane})}
            style={Styles.editButton}>view</button>
          <button onClick={this.changeState({pane:this.state.deletePane})}
            style={Styles.editButton}>delete</button>
        </Row>
        {this.state.pane}
      </div>
    )
  }
}

export default ViewAnswerApp
