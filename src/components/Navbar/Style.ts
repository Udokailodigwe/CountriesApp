import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  appbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
    padding: '30px',
    borderRadius: '20px',
    position: 'sticky',
    top: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '30px',
  },
}))
