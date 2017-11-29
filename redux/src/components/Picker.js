import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (



     <textarea style={{width:"1500px" , height: "400px"}} onChange={e => onChange(e.target.value)}
        
         defaultValue={value} />

)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker