import React from 'react'
import {Row} from 'react-flexbox-grid'



class ViewEditApp2 extends Component {

  componentWillMount() {
    this.setState({
      value: this.props.value,
      answer: this.props.answer,
      option0: this.props.option0,
      option1: this.props.option1,
      option2: this.props.option2,
      option3: this.props.option3
      pane: this.props.pane
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
      this.setState(obj)
    }
  }

  render() {
    let viewPane = undefined
    let editPane = undefined
    let deletePane = undefined

    if(this.state.type === SHORT_ANSWER) {
      viewPane = (
        <ShortAnswerDisplay
          index={this.props.index}
          value={this.props.value}
          answer:{this.props.answer}/>
      )
      editPane = (
        <ShortAnswerEditor
          index={this.props.index}
          value={this.props.value}
          answer:{this.props.answer}/>
      )
      deletePane = undefined
    } else if (this.state.type === MULTIPLE_CHOICE) {
      viewPane = (
        <MultipleAnswerDisplay
          index={this.props.index}
          value={this.porps.value}
          answer={this.props.answer}
          option0={this.props.option0}
          option1={this.props.option1}
          option2={this.props.option2}
          option3={this.props.option3}/>
      )
      editPane = {
        <MultipleAnswerEditor
          index={this.props.index}
          value={this.porps.value}
          answer={this.props.answer}
          option0={this.props.option0}
          option1={this.props.option1}
          option2={this.props.option2}
          option3={this.props.option3}/>
      }
    }

    return() {
      <Row>
        <button onClick={this.changeState({pane:viewPane})}>view</button>
        <button onClick={this.changeState({pane:editPane})}>edit</button>
        <button onClick={this.changeState({pane:deletePane})}>delete</button>
      </Row>
      {this.state.pane}
    }
  }
}
