const Styles = {

//================Title Part================
  title: {
    // for the title
    fontFamily:'monospace',
    fontSize:50,
    color: '#4d2600',
    margin: 20,
  },

//================Border Part================
borderSet: {
  // this is for view edit border
  width:'500px',
  border: '5px solid #cccccc',
  margin: '0px',
},

questionBorder: {
  // this is for one single question border
  width:'450px',
  margin: '10px 21px',
  border: '2px solid #cccccc',
},

//================Login Part================
  loginSet: {
    // this is for login border
    fontFamily:'monospace',
    fontSize:20,
    color: '#4d2600',
    margin: 30,
  },

//================Instruction Part================
instructionSize: {
  // this is for instruction fontSize
  fontFamily: 'Lucida Sans Unicode',
  fontSize: '20px',
  color: '#006666',
  width: '500px',
  height: '500px',
  border: '2px solid #a6a6a6',
},

//================Index Link Part================
  indexButton: {
    // this is for index Button
    fontFamily: 'Garamond',
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    background: '#d9d9d9',
    underlayColor: '#4169e1',
    margin: '5px',
    fontSize: '18px',
    width: '120px',
    height: '40px',
    borderRadius: 20,
    borderColor: '#e6e6e6',
    borderWidth: 0.5,
  },

  subIndexLink: {
    // this is for subIndex like short answer, mulitple answer
    margin: '15px 15px 15px 0px',
    fontSize: '28px',
    color: '#b3b3b3',
    textDecoration: 'none',
    width: '190px',
    border: '2px solid #b3b3b3',
    borderRadius: '0.5rem',
  },

//================Question Make Part================
textSize: {
  // this is for question Text
  fontFamily: 'Verdana',
  color: '#737373',
  fontSize: '18px',
  margin: '5px 10px',
},

questionArea: {
  // this is for question generate TextArea
  fontFamily: 'monospace',
  width: '660px',
  resize: 'none',
  height: '80px',
  fontSize: '15px',
  color: 'black',
  backgroundColor: '#f2f2f2',
  margin: '0px 15px',
},

textArea: {
  // this is for quiz creator TextArea
  fontFamily: 'monospace',
  width: '200px',
  resize: 'none',
  height: '25px',
  fontSize: '15px',
  color: 'black',
  backgroundColor: '#f2f2f2',
  margin: '5px 15px',
},

selectBar: {
  // this is for selectBar
  fontFamily: 'Verdana',
  fontSize: '15px',
  height: '35px',
  width:'230px',
  backgroundColor: '#f2f2f2',
  margin: '0px 15px',
},

submitButton: {
  // this is for submit button
  fontFamily: 'Verdana',
  color: '#737373',
  background: '#f2f2f2',
  underlayColor: '#4169e1',
  margin: '15px',
  fontSize: '15px',
  width: '80px',
  height: '35px',
  borderRadius: 5,
  borderColor: '#e6e6e6',
  borderWidth: 0.5,
},

//================Edit Question Part================
//========Edit Button Part========
editButton: {
  // this is for edit button
  fontSize: '16px',
  fontFamily: 'Lucida Sans Unicode',
  marginBottom: 0,
  color: '#808080',
  backgroundColor: '#e6e6e6',
  width: '55px',
  borderWidth: 0.5,
},

editButtonfront: {
  // this is for first edit button
  fontSize: '16px',
  fontFamily: 'Lucida Sans Unicode',
  marginBottom: 0,
  color: '#808080',
  backgroundColor: '#e6e6e6',
  borderBottomLeftRadius: '20px',
  borderTopLeftRadius: '20px',
  width: '55px',
  borderWidth: 0.5,
},

editButtonlast: {
  // this is for last edit button
  fontSize: '16px',
  fontFamily: 'Lucida Sans Unicode',
  marginBottom: 0,
  color: '#808080',
  backgroundColor: '#e6e6e6',
  borderBottomRightRadius: '20px',
  borderTopRightRadius: '20px',
  width: '55px',
  borderWidth: 0.5,
},

//========Edit Text Part========
editText: {
  // this is for edit Text
  fontFamily: 'Verdana',
  color: 'black',
  fontSize: '15px',
  margin: '25px',
},

editQuestionArea: {
  // this is for edit exist question TextArea
  fontFamily: 'monospace',
  width: '400px',
  resize: 'none',
  height: '50px',
  fontSize: '15px',
  color: 'black',
  backgroundColor: '#f2f2f2',
},

editSelectBar: {
  // this is for edit selectBar
  fontFamily: 'Verdana',
  fontSize: '14px',
  height: '20px',
  width:'210px',
  backgroundColor: '#f2f2f2',
  margin: '0px 5px',
},

smallButton: {
  // this is for small button ex:edit spoiler
  fontFamily: 'Verdana',
  color: '#737373',
  background: '#f2f2f2',
  underlayColor: '#4169e1',
  margin: '0px 5px',
  fontSize: '12px',
  width: '60px',
  height: '20px',
  borderRadius: 5,
  borderColor: '#e6e6e6',
  borderWidth: 0.5,
},

marginSet: {
  // this is for stand margin set
  margin: '5px 25px',
},

//================View Part================
viewText: {
    // this is for edit Text
    fontFamily: 'Verdana',
    color: 'black',
    fontSize: '15px',
    margin: '5px 20px',

},

  // backgroundSet: {
  //   // this is for the background
  //   width: '100%',
  //   height: '100%',
  //   backgroundImage: 'url('+backgroundImage+')',
  //   backgroundSize: 'cover',
  //   overflow: 'hidden',
  // },

  // backgroundList: {
  //   width: '100%',
  //   height: 'fit-content',
  //   backgroundImage: 'url('+backgroundImage+')',
  //   backgroundSize: 'cover',
  //   overflow:'hidden',
  // },

  // indexLink: {
  //   color: 'white',
  //   background: '666666',
  //   onmouseover: {textDecoration: 'wavy'},
  //   textDecoration: 'none',
  // },

};

export default Styles;
