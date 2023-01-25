import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Recipe from './Recipe'
import RecipeProvider from '../provider/RecipeProvider'

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
    console.log('setup mock')

    vi.mock('../provider/repository/recipeRepository.js', () => ({
      loadRecipes: vi.fn(),
      storeRecipes: vi.fn(),
    }))
  })

  describe('when rendered', () => {
    beforeEach(() => {
      render(
        <RecipeProvider>
          <Recipe {...recipe} />
        </RecipeProvider>,
      )
      screen.debug()
    })

    it('should not render the recipe id', () => {
      expect(screen.queryByText(recipe.id)).not.toBeInTheDocument()
    })

    it('should render the recipe name', () => {
      expect(screen.queryByText(recipe.name)).toBeInTheDocument()
    })
  })
})
