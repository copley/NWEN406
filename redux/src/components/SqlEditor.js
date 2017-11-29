import React from 'react'
import PropTypes from 'prop-types'

const SqlEditor = ({ value, onChange }) => (



     <textarea style={{width:"1500px" , height: "400px"}} onChange={e => onChange(e.target.value)}
        
         defaultValue={value} />

)

SqlEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SqlEditor