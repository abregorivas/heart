import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText, MenuItem } from '@material-ui/core'
import uuid from 'uuid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  primary: {
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
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
    <MenuItem
      className={classes.root}
      key={uuid()}
      button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleSelection(primaryText)}
    >
      <Typography className={classes.primary} variant="body2" component="span">
        {primaryText}
      </Typography>
      <Typography variant="body2" component="span" noWrap>
        {secondaryText}
      </Typography>
    </MenuItem>
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
