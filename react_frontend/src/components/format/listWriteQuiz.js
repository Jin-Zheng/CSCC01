import React from 'react'

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
    .then((res) => (console.log(res)))
  }

  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
  }

  render() {
    console.log('dappa')
    return(
      <div>
        hi
      </div>
    )
  }
}

export default ListWriteQuiz
