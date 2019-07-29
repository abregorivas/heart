import React from 'react'
import PropTypes from 'prop-types';
import { Container, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  searchInput: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

const SearchInput = ({ handleChange, searchValue, placeholder, disabled }) => {
  const classes = useStyles()
  return (
    <Container>
      <TextField
        id="outlined-bare"
        disabled={disabled}
        className={classes.textField}
        value={searchValue}
        margin="normal"
        fullWidth
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
        onChange={handleChange()}
        placeholder={ placeholder }
      />
    </Container>
  )
}

SearchInput.propTypes = {
  searchValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
}

SearchInput.defaultProps = {
  searchValue: null,
  placeholder: "Search",
  disabled: false,
}

export default SearchInput
            // ? 'Max Violations Entered'
            // : placeholder
            // ? placeholder
            // : 'Search'
