import React from 'react'
import {List} from 'immutable'
import {Row, Col} from 'react-flexbox-grid'
import CreateShortAnswer from './createShortAnswer.js'


class QuestionController extends React.Component {

  constructor(props){
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
    this.state = {
      pane: undefined,
      buttons: (
        List([
          <button onClick={(e) => {e.preventDefault();this.setState({pane: <CreateShortAnswer/>})}}>Short Answer</button>,
          <button onClick={(e) => {e.preventDefault();this.setState({pane: 'Multiple Choice Pane'})}} value="Multiple Choice">Multiple Choice</button>
        ])
      )
    }
  }

  formSubmit(e){
    e.preventDefault()
    this.setState({buttons: e.target.value})
  }

  render() {
    return (
      <div>
          <Row>
            <form onSubmit={this.formSubmit}>
              {this.state.buttons}
              <p/>
            </form>
          </Row>
          <Row>
              {this.state.pane}
              <p/>
          </Row>
      </div>
    )
  }
}

export default QuestionController
