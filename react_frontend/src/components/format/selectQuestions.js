import React from 'react'

class SelectQuestions extends React.Component {
  componentWillMount() {
    fetch('/api/question/get/all')
    .then((res) => (
      res.json()
    )).then((res) => (
      this.setState({question: res})
    )).catch((err)=>(
      console.log(err)
    ))
  }

  constuctor(props) {
    super(props)
    this.state = {
      questions: undefined
    }
  }

  wrap(q) => {
    <>
  }
}

export default SelectQuestions
