import backgroundImage from './back.jpg'

const Styles = {
  title: {
    fontFamily:'monospace',
    fontSize:50,
    color: 'white',
    margin: 20,
  },

  textArea: {
    fontFamily: 'monospace',
    width: '100%',
    resize: 'none',
    height: 60,
    fontSize: '12px',
    color: '#e6e6e6',
    backgroundColor: '#666666',

  },

  backgroundSet: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url('+backgroundImage+')',
    backgroundSize: 'cover',
    overflow:'hidden',
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
    marginBottom: 10,
    color: '#d9d9d9',
    background: '#666666',
    underlayColor: '#4169e1',
    margin: '5px',
    fontSize: '15px',
    width: '150px',
    height: '45px',
    borderRadius: 5,
    borderColor: '#e6e6e6',
    borderWidth: 0.3,
  },

  subIndexLink: {
    margin: 10,
    fontSize: '25px',
    color: '#e6e6e6',
  },

  editButton: {
    marginBottom: 0,
    color: 'black',
    backgroundColor: 'e6e6e6',
    borderRadius: '90%',
    padding: '5',
    fontSize: '15px',
    marginRight: '5px',
  },

  submitButton: {
    color: '#d9d9d9',
    background: '#666666',
    underlayColor: '#4169e1',
    margin: '5px',
    fontSize: '14px',
    width: '80px',
    height: '35px',
    borderRadius: 5,
    borderColor: '#e6e6e6',
    borderWidth: 0.3,
  },

  textSize: {
    color: '#e6e6e6',
    fontSize: '18px',
  },
};

export default Styles;
