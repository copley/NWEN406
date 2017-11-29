import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (
  <span>
    <h1>{value}</h1>

     <textarea onChange={e => onChange(e.target.value)}
        
         defaultValue={value} />
  </span>
)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker