import React from 'react'

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChanged, handleIngredientDeleted } = props

  const handleChange = (changes) => {
    handleIngredientChanged(ingredient.id, { ...ingredient, ...changes })
  }

  const { name, amount } = ingredient

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={amount}
        onInput={(e) => handleChange({ amount: e.target.value })}
      />
      <button className="btn btn--danger" onClick={() => handleIngredientDeleted(ingredient.id)}>
        &times;
      </button>
    </>
  )
}
