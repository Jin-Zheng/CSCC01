import React from 'react'
import {List} from 'immutable'

class QuestionPrompt extends React.Component {

}

// this is the component that will come out of the spoiler tag
class WriteQuiz extends React.Component {

}

//this is the componentr that has all of the data
class ListWriteQuiz extends React.Component {

  componentWillMount() {
    fetch('/quizApi/quiz/get/all')
    .then((res) => (res.json()))
    .then((res) => {
      this.setState({data: res})
      return res
    })
    .then((res) => (console.log(res)))
  }

  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
    this.format = this.format.bind(this)
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

  render() {
    return(
      <div>
        {this.state.data && JSON.stringify(this.state.data)}
      </div>
    )
  }
}

export default ListWriteQuiz
