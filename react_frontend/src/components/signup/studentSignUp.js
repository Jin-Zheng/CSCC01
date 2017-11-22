import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../../styles'

class StudentSignUp extends React.Component {
  componentWillMount() {
  }

  constructor(props) {
    super(props)
    this.changeText = this.changeText.bind(this)
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
    }
  }

  changeText(field) {
    return (e) => {
      e.preventDefault()
      this.setState({[field]:e.target.value})
    }
  }

  handleSubmit(event){
    event.preventDefault()
    // // lastaccess and lastmodified time we will get in the backend.
    // var data = {
    //   uType: 'STUDENT',
    //   username: this.state.username,
    //   password: this.state.password,
    //   firstName: this.state.firstname,
    //   lastName: this.state.lastname,
    //   email: this.state.email,
    // }
    // console.log(data)
    // fetch("/signupApp/InstructorSignUp", {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(data)
    // }).then(function(response) {
    //   if (response.status >= 400) {
    //     throw new Error("Bad response from server");
    //   }
    //   return response.json();
    // }).catch(function(err) {
    //   console.log(err)
    // });
    // // Temp show that a question was submitted
    // this.setState({username:'', password:'', firstname:'', lastname:'', email:''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row style={Styles.textSize}>
            Username:
          </Row>
          <Row>
            <textarea
              username={this.state.username}
              onChange={this.changeText('username')}
              style={Styles.textArea}/>
          </Row>
          <Row style={Styles.textSize}>
            Password:
          </Row>
          <Row>
            <textarea
              password={this.state.password}
              onChange={this.changeText('password')}
              style={Styles.textArea}/>
          </Row>
          <Row style={Styles.textSize}>
            Email:
          </Row>
          <Row>
            <textarea
              email={this.state.email}
              onChange={this.changeText('email')}
              style={Styles.textArea}/>
          </Row>
          <Row style={Styles.textSize}>
            First Name:
          </Row>
          <Row>
            <textarea
              firstname={this.state.firstname}
              onChange={this.changeText('firstname')}
              style={Styles.textArea}/>
          </Row>
          <Row style={Styles.textSize}>
            Last Name:
          </Row>
          <Row>
            <textarea
              lastname={this.state.lastname}
              onChange={this.changeText('lastname')}
              style={Styles.textArea}/>
          </Row>
          <Row>
            <button type={'submit'}
              style={Styles.submitButton}>
              submit
            </button>
          </Row>
        </form>
      </div>
    )
  }
}

export default StudentSignUp
