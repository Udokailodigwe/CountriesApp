import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  link: {
    textDecoration: 'underline',
    color: 'inherit',
  },
  button: {
    float: 'right',
    clear: 'both',
    padding: '3px',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  home_button: {
    cursor: 'pointer',
    marginTop: '20px',
    color: '#000',
    float: 'left',
    clear: 'both',
    padding: '3px',
    backgroundColor: '#bada55',
    border: 'none',
    borderRadius: '3px',
  },
  header: {
    fontWeight: 300,
    marginBotton: '50px',
  },
  main: {
    padding: '20px 20px',
  },
}))
