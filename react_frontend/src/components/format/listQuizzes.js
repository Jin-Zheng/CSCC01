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
  render() {
    return(
      <Row>
        this is a ListQuizzes
      </Row>
    )
  }
}

export default ListQuizzes
