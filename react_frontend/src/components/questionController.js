import React from 'react'
import {List} from 'immutable'
import {Row} from 'react-flexbox-grid'
import CreateShortAnswer from './createShortAnswer.js'
import CreateMultipleChoice from './createMultipleChoice.js'


class QuestionController extends React.Component {

  constructor(props){
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
    this.state = {
      pane: undefined,
      buttons: (
        List([
          <button onClick={(e) =>
              {e.preventDefault();
                this.setState({pane: <CreateShortAnswer/>})}}>
                Short Answer
              </button>,
          <button onClick={(e) =>
              {e.preventDefault();
                this.setState({pane: <CreateMultipleChoice/>})}}>
                Multiple Choice
              </button>
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
          {this.state.pane}
      </div>
    )
  }
}

export default QuestionController
