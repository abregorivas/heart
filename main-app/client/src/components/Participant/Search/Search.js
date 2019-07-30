import React, { useState } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import { Container, Collapse } from '@material-ui/core'
import _ from 'lodash'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import CardContent from '@material-ui/core/CardContent'
import VirtualizedList from './VirtualList'

const Search = ({ disabled, searchList, handleSelection, placeholder }) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [alertMsg, setAlertMsg] = useState({ msg: '', type: '' })
  const [expanded, setExpanded] = useState(false)

  const findSearchResults = searchValue => {
    const match = new RegExp(escapeRegExp(searchValue), 'i')
    return searchValue ? searchList.filter(x => match.test(x.text)) : []
  }

  const handleChange = () => event => {
    const val = event.target.value
    const results = findSearchResults(val)
    if (results.length > 0) setExpanded(true)
    setSearchValue(val)
    setSearchResults(results)
    setAlertMsg({ msg: val, type: 'uncommon' })
  }

  const handleHover = val => {
    const x = _.find(searchList, o => o.text === val)
    const type = x ? 'common' : 'uncommon'
    setAlertMsg({ msg: val, type })
  }

  const handleSelectedValue = value => {
    handleSelection(value)
    setSearchValue('')
    setAlertMsg('')
    setSearchResults([])
  }

  return (
    <>
      <SearchInput
        handleChange={handleChange}
        searchValue={searchValue}
        placeholder={disabled ? 'Max Violations Entered' : placeholder}
        disabled={disabled}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <VirtualizedList
            list={searchResults}
            alertMsg={alertMsg}
            searchValue={searchValue}
            handleHover={handleHover}
            handleSelection={handleSelectedValue}
          />
        </CardContent>
      </Collapse>
    </>
  )
}

Search.propTypes = {
  searchValue: PropTypes.string,
  placeholder: PropTypes.string,
  handleSelection: PropTypes.func,
}

export default Search
// <SearchResults
//   list={searchResults}
//   alertMsg={alertMsg}
//   searchValue={searchValue}
//   handleHover={handleHover}
//   handleSelection={handleSelectedValue}
// />

//
// <Container>
// {searchResults.length > 0 ?
//     <p className="alert"
//        onClick={() => handleSelectedValue(alertMsg.msg)}>
//       Input violation {alertMsg.msg} ({alertMsg.type}) </p>
//     : null}
// <ul className="search-list-item">
//   {searchResults.map(x =>
//     <Fragment key={uuid()}>
//       <li
//         onClick={() => handleSelectedValue(x.text)}
//         onMouseEnter={() => handleHover(x.text)}
//         onMouseLeave={() => handleHover(searchValue)}
//       >
//
//         <span><strong>{x.text}</strong> <span>{x.description}</span></span>
//       </li>
//     </Fragment>
//   )}
//   {searchResults.length == 0 && searchValue ?
//     <li onClick={() => handleSelectedValue(searchValue)}>
//       Input Violation {searchValue} (uncommon))
//     </li> : null}
//
// </ul>
// </Container>

// #todo make search results clickable and make a list item for what is being interred by user
// #proivde an alert when 5 violation limit has been reached
// add placeholder value max has been reached add label max violations is 5
//
// {/*<div className="container">*/}
// {/*<label className="search-label">*/}
// {/*  {searchResults.length > 0 ? 'Matching searches' : searchValue.length > 0 ? "No matches" : null}*/}
// {/*</label>*/}
