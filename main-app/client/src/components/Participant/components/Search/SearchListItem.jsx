import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from '@material-ui/core'
import uuid from 'uuid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    backgroundColor: theme.palette.background.paper,
  },
  listText: {
    display: 'flex',
  },
  primary: {
    display: 'inline-block',
    marginRight: theme.spacing(2),
    flex: '0 1 auto',
  },
  secondary: {
    flex: '0 1 auto',
    maxWidth: 300,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

const SearchListItem = ({
  primaryText,
  secondaryText,
  handleMouseEnter,
  handleMouseLeave,
  handleSelection,
}) => {
  const classes = useStyles()

  return (
    <ListItem
      className={classes.root}
      key={uuid()}
      button

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleSelection(primaryText)}
    >
      <ListItemText
        classes={{
          root: classes.listText,
          primary: classes.primary,
          secondary: classes.secondary,
        }}
        primary={primaryText}
        secondary={secondaryText}
      />
    </ListItem>
  )
}

SearchListItem.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  handleSelection: PropTypes.func,
}
SearchListItem.defaultProps = {
  primaryText: 'Primary',
  secondaryText: 'Secondary Text',
}

export default SearchListItem
