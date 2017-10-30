import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../styles'

class McEditor extends React.Component {

  componentWillMount() {
    this.setState({
      value: this.props.value,
      option0: this.props.option0,
      option1: this.props.option1,
      option2: this.props.option2,
      option3: this.props.option3,
      answer: this.props.answer
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
      option0: undefined,
      option1: undefined,
      option2: undefined,
      option3: undefined,
      answer: undefined
    }
    this.changeState = this.changeState.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  changeState(obj) {
    return (e) => {
      e.preventDefault()
      this.setState(obj)
    }
  }

  changeText(field) {
    return (e) => {
      e.preventDefault()
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    return (
      <form
        onSubmit = {(e) => {e.preventDefault()}}>
        <Row>
          Value:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            onChange={this.changeText('value')}
            value={this.state.value}/>
        </Row>
        <Row>
          Option0:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            onChange={this.changeText('option0')}
            value={this.state.option0}/>
        </Row>
        <Row>
          Option1:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            onChange={this.changeText('option1')}
            value={this.state.option1}/>
        </Row>
        <Row>
          Option2:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            onChange={this.changeText('option2')}
            value={this.state.option2}/>
        </Row>
        <Row>
          Option3:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            onChange={this.changeText('option3')}
            value={this.state.option3}/>
        </Row>
      </form>
    )
  }
}

export default McEditor
