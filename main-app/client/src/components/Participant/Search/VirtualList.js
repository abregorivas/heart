import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { FixedSizeList } from 'react-window'
import Typography from '@material-ui/core/Typography'
import { MenuItem } from '@material-ui/core'
import SearchListItem from './SearchListItem'

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    // height: 260,
    // maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}))

class Row extends PureComponent {
  render() {
    const { index, style, data } = this.props
    const { list, searchValue, alertMsg, handleHover, handleSelection } = data
    let item = list[index]
    return (
      <ListItem
        button
        style={style}
        key={index}
        onMouseEnter={() => handleHover(item.text)}
        onMouseLeave={() => handleHover(searchValue)}
        onClick={() => handleSelection(item.text)}
      >
        <ListItemText primary={item.text} secondary={item.description} />
      </ListItem>
    )
  }
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
}

export default function VirtualizedList({
  list,
  searchValue,
  alertMsg,
  handleHover,
  handleSelection,
}) {
  return (
    <FixedSizeList
      height={list.length > 0 ? 232 : 0}
      width={500}
      itemSize={58}
      itemCount={list.length}
      itemData={{
        list,
        searchValue,
        alertMsg,
        handleHover,
        handleSelection,
      }}
    >
      {Row}
    </FixedSizeList>
  )
}
//
// <MenuItem
//   // className={classes.root}
//   key={index}
//   button
//   onMouseEnter={() => handleHover(item.text)}
//   onMouseLeave={() => handleHover(searchValue)}
//   onClick={() => handleSelection(item.text)}
// >
//   <Typography variant="body2" component="span">
//     {item.text}
//   </Typography>
//   <Typography variant="body2" component="span" noWrap>
//     {item.description}
//   </Typography>
// </MenuItem>
