import React from 'react'
import {Row} from 'react-flexbox-grid'
import {List} from 'immutable'
import FormatListView from '../format/formatListView'

class StudentSignUp extends React.Component {
  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.changeText = this.changeText.bind(this)
    this.state = {
      id: '',
      password: '',
      email: '',
    }
  }

  formSubmit(event) {
    event.preventDefault()
    this.setState({message:this.state.id + ':' + this.state.password})
  }

  changeText(field) {
    return (e) => {
      e.preventDefault()
      this.setState({[field]:e.target.value})
    }
  }

  render() {
    const debugList = List([
      'Student:',
      'id: ' + this.state.id,
      'password: ' + this.state.password,
      'email: ' + this.state.email,
    ])
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <FormatListView list = {debugList}/>
          <Row>
            Id:
          </Row>
          <Row>
            <textarea id={this.state.id} onChange={this.changeText('id')}>
            </textarea>
          </Row>
          <Row>
            Password:
          </Row>
          <Row>
            <textarea password={this.state.password} onChange={this.changeText('password')}>
            </textarea>
          </Row>
          <Row>
            Email:
          </Row>
          <Row>
            <textarea email={this.state.email} onChange={this.changeText('email')}>
            </textarea>
          </Row>
          <button type={'submit'}>
            submit
          </button>
        </form>
      </div>
    )
  }
}

export default StudentSignUp
