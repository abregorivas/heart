import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
} from '@material-ui/core'

const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      flexGrow: 1,
      display: 'none',
      marginLeft: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      marginRight: theme.spacing(2),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  })
)

const SearchBar = props => {
  const classes = useStyles()
  const { filterSearch, handleClose } = props
  const [values, setValues] = useState({
    search: '',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
    filterSearch(event.target.value)
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}>
          Sermons
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            value={values.search}
            onChange={handleChange('search')}
            placeholder="Search by title…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

SearchBar.propTypes = {
  filterSearch: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SearchBar
