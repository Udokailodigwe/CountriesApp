import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  appbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#bada55',
    padding: '10px',
    position: 'sticky',
    top: 0,
    left: 100,
    marginTop: '50px',
    borderRadius: '10px',
    width: '85vw',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    gap: '35px',
  },
  sup: {
    fontSize: '14px',
  },
}))
