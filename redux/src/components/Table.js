import React from 'react'
import PropTypes from 'prop-types'

const Table = ({rows}) => (
  <table style={{color: "green"}}><tbody>
    {rows.map((rows, i) =>
      <tr key={i}><td>{rows.row}</td></tr>
    )}
   </tbody></table>
)

Table.propTypes = {
  rows: PropTypes.array.isRequired
}

export default Table
