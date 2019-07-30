import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SectionHeading } from '../Shared'
import Citation from './Citation'
import { useFetch } from '../../../hooks/useFetch'
import uuid from 'uuid'
import updateCitation from '../../../api/updateCitation.api'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

export const Citations = ({ userId }) => {
  let handleSave
  const classes = useStyles()
  const [{ isLoading, isError, data }, fetchData] = useFetch(
    `citations/${userId}`
  )

  const handleDelete = citationId => {
    console.log('deleted')
    // fetchData('delete', `participants/${userId}/citations/${citationId}`)
  }

  handleSave = values => {
    updateCitation({ data: values, citationId: values.id })
  }

  const renderCitations = () => (
    <>
      {data.map(citation => (
        <Citation
          key={uuid()}
          citationData={citation}
          handleSave={handleSave}
          handleDelete={() => handleDelete(citation.citationId)}
        />
      ))}
    </>
  )

  return (
    <Container className={classes.root}>
      <SectionHeading>Citations</SectionHeading>
      {isLoading ? 'Loading...' : renderCitations()}
    </Container>
  )
}

Citations.propTypes = {
  userId: PropTypes.number,
}

export default Citations
// {JSON.stringify(data)}
