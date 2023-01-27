import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import RecipeProvider from '../provider/RecipeProvider'
import Recipe from './Recipe'

describe('the recipe', () => {
  const recipe = {
    id: crypto.randomUUID(),
    name: crypto.randomUUID(),
    servings: crypto.randomUUID(),
    cookTime: crypto.randomUUID(),
    instructions: crypto.randomUUID(),
    ingredients: [],
  }

  beforeEach(() => {
    vi.mock('../provider/repository/recipeRepository.js', () => ({
      loadRecipes: vi.fn(),
      storeRecipes: vi.fn(),
    }))
  })

  describe('when rendered', () => {
    beforeEach(() => {
      render(
        <RecipeProvider initialRecipes={[]}>
          <Recipe {...recipe} />
        </RecipeProvider>,
      )
      // screen.debug()
    })

    it('should not render the recipe id', () => {
      expect(screen.queryByText(recipe.id)).not.toBeInTheDocument()
    })

    it('should render the recipe name', () => {
      expect(screen.queryByText(recipe.name)).toBeInTheDocument()
    })
  })
})
