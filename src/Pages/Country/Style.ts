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
  card: {
    margin: '5% 35%',
    width: 'fit-content',
  },
}))
