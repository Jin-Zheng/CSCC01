import backgroundImage from './back.jpg'

const Styles = {
  title: {
    // for the title
    fontFamily:'monospace',
    fontSize:50,
    color: '#4d2600',
    margin: 20,
  },

  textArea: {
    // this is for textArea
    fontFamily: 'monospace',
    width: '100%',
    resize: 'none',
    height: 60,
    fontSize: '12px',
    color: 'black',
    backgroundColor: 'white',

  },

  backgroundSet: {
    // this is for the background
    width: '100%',
    //height: '100%',
    backgroundImage: 'url('+backgroundImage+')',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },

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
    borderWidth: 0.3,
  },

  subIndexLink: {
    // this is for subIndex like short answer, mulitple answer
    margin: 10,
    fontSize: '30px',
    color: '#666699',
  },

  editButton: {
    // this is for edit button
    marginBottom: 0,
    color: 'black',
    backgroundColor: 'e6e6e6',
    borderRadius: '90%',
    padding: '5',
    fontSize: '15px',
    marginRight: '5px',
  },

  submitButton: {
    // this is for submit button
    fontFamily: 'Verdana',
    color: '#8585ad',
    background: '#e1e1ea',
    underlayColor: '#4169e1',
    margin: '5px',
    fontSize: '15px',
    width: '80px',
    height: '35px',
    borderRadius: 5,
    borderColor: '#e6e6e6',
    borderWidth: 0.3,
  },

  textSize: {
    // this is for question text
    fontFamily: 'Verdana',
    color: '#8585ad',
    fontSize: '18px',
  },

  selectBar: {
    // this is for selectBar
    // fontFamily: 'Verdana',
    // fontSize: '18px',
    // width: '250px',
    // height: '35px',
    width:'230px',
    border: '1px solid blue',
    padding:'5px',
    margin: '10px',
  },
};

export default Styles;
