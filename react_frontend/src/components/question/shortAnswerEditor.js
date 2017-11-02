import FormatListView from '../format/formatListView'
import {List} from 'immutable'
import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../../styles'

class ShortAnswerEditor extends React.Component {

  componentWillMount() {
    this.setState({
      value: this.props.value,
      answer: this.props.answer
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
      answer: undefined
    }
    this.changeText = this.changeText.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  changeState(obj) {
    return (e) => {
      e.preventDefault()
      this.setState({obj})
    }
  }

  changeText(field) {
    return (e) => {
      e.preventDefault()
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    //const debugList = List([
    //  'value: ' + this.state.value,
    //  'answer: ' + this.state.answer
    //])
    const debugList = []
    return (
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <FormatListView list={debugList}/>
        <Row>
          Value:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            value={this.state.value}
            onChange={this.changeText('value')}/>
        </Row>
        <Row>
          Answer:
        </Row>
        <Row>
          <textarea
            style={Styles.textareaSimple}
            value={this.state.answer}
            onChange={this.changeText('answer')}/>
        </Row>
        <Row>
          <p/>
        </Row>
        <Row end='xs'>
          <button type={'submit'}>
            submit
          </button>
        </Row>
      </form>
    )
  }
}

export default ShortAnswerEditor