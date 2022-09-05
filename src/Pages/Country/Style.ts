import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  not_found: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  return_button: {
    padding: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    marginLeft: '20px',
    backgroundColor: 'aqua',
    border: 'none',
    borderRadius: '10px',
  },
}))
