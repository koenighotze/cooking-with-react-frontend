import PropTypes from 'prop-types'
import React from 'react'

export default function Ingredient({ name, amount }) {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  )
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
}
