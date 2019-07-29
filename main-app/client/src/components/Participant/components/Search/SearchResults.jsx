import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import uuid from 'uuid'
import SearchListItem from './SearchListItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    backgroundColor: theme.palette.background.paper,
    maxHeight: 35,
    position: 'relative',
    overflow: 'auto',
  },
}))

const SearchResults = ({ list, searchValue, alertMsg, handleHover,handleSelection }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {list.length > 0 &&
      <SearchListItem
        primaryText={`Input violation ${alertMsg.msg}`}
        secondaryText={`(${alertMsg.type})`}
        handleSelection={() => handleSelection(alertMsg.msg)}
      />
      }
      {list.map(x => (
        <SearchListItem
          key={uuid()}
          primaryText={x.text}
          secondaryText={x.description}
          handleMouseEnter={() => handleHover(x.text)}
          handleMouseLeave={() => handleHover(searchValue)}
          handleSelection={handleSelection}
        />
      ))}
    </List>
  )
}

SearchResults.propTypes = {
  searchList: PropTypes.arrayOf(),
}

export default SearchResults
