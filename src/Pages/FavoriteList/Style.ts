import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  link: {
    textDecoration: 'underline',
    color: 'inherit',
  },
  button: {
    float: 'right',
    padding: '3px',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '3px',
  },
  header: {
    fontWeight: 300,
    marginBotton: '50px',
  },
  main: {
    padding: '20px 100px',
  },
}))
