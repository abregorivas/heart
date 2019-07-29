import React from 'react'
import PropTypes from 'prop-types'
import { SectionContainer } from '../Shared'
import CitationForm from './CitationForm'

const Citation = ({ citationData, handleSave, handleDelete }) => {
  return (
    <SectionContainer>
      <CitationForm
        initValues={citationData}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </SectionContainer>
  )
}

export default Citation
