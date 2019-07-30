import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, MenuList, List, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import uuid from 'uuid'
import SearchListItem from './SearchListItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxHeight: 300,
    position: 'relative',
    overflow: 'auto',
  },
  alertMsg: {
    marginTop: theme.spacing(-2),
    backgroundColor: 'tomato',
  },
}))

const SearchResults = ({
  list,
  searchValue,
  alertMsg,
  handleHover,
  handleSelection,
}) => {
  const classes = useStyles()
  return (
    <>
      {list.length > 0 && (
        <div className={classes.alertMsg}>
          <SearchListItem
            primaryText={`Input violation ${alertMsg.msg}`}
            secondaryText={`(${alertMsg.type})`}
            handleSelection={() => handleSelection(alertMsg.msg)}
          />
          <Divider />
        </div>
      )}
      <MenuList className={classes.root}>
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
      </MenuList>
    </>
  )
}

SearchResults.propTypes = {
  searchList: PropTypes.arrayOf(),
}

export default SearchResults
