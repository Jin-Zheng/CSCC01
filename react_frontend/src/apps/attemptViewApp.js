import React from 'react'
import {Row} from 'react-flexbox-grid'
import Styles from '../../styles'

class attemptViewApp extends React.Component {
	
  componentWillMount(){
  	this.setState({
      attemptKey: this.props.attemptKey,
      studentUsername: this.props.studentUsername,
      qValue: this.props.qValue,
      qType: this.props.qType,
      option0: this.props.candidate1,
      option1: this.props.candidate2,
      option2: this.props.candidate3,
      option3: this.props.candidate4,
      studentAnswer: this.props.studentAnswer,
      grade: this.props.grade
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      attemptKey: undefined,
      studentUsername: undefined,
      qValue: undefined,
      qType: undefined,
      option0: undefined,
      option1: undefined,
      option2: undefined,
      option3: undefined,
      studentAnswer: undefined,
      grade: undefined,
    }
  }

  render(){
  	return (
  		<div>
  			<Row>
  				Attempt Key: {this.state.attemptKey}
  			</Row>
  			<Row>
  				Student Name: {this.state.studentUsername}
  			</Row>
  			<Row>
  				Question: <br/>
  				{this.state.qValue}
  			</Row>
  			<Row>
  				Type: {this.state.qType}
  			</Row>
  			<Row>
  				Option 0: <br/>
  				{this.state.option0}
  			</Row>
  			<Row>
  				Option 1: <br/>
  				{this.state.option1}
  			</Row>
  			<Row>
  				Option 2: <br/>
  				{this.state.option2}
  			</Row>
  			<Row>
  				Option 3: <br/>
  				{this.state.option3}
  			</Row>
  			<Row>
  				Student Answer: <br/>
  				{this.state.studentAnswer}
  			</Row>
  			<Row>
  				Grade: {this.state.grade}
  			</Row>

  		</div>
  	)
  }
}

export default attemptViewApp