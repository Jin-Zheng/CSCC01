import React from 'react'
import {List} from 'immutable'
import {Row, Col} from 'react-flexbox-grid'

class FormatListView extends React.Component{

  constructor(props) {
    super(props)
  }

  render() {
    const fixedList = this.props.list.map((element) => (
      <Row>
        {element}
      </Row>
    ))
    return (
      <div>
        {fixedList}
      </div>
    )
  }
}

export default FormatListView
