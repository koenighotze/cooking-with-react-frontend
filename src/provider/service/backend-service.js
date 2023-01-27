import samples from './backend-service-samples'
import randomSleep from './util'

const mockData = [...samples.recipes]

const fetchRecipes = async (MOCK_MODE = true) => {
  if (MOCK_MODE) {
    await randomSleep()
    return mockData.map(
      ({
        id,
        title,
        description,
        instructions,
        servings,
        total_time_minutes,
        prep_time_minutes,
        ingredients,
      }) => ({
        id,
        name: title,
        description,
        servings,
        totalTimeMinutes: total_time_minutes,
        prepTimeMinutes: prep_time_minutes,
        instructions,
        ingredients,
      }),
    )
  }

  // const options = {
  //   method: 'GET',
  //   headers: {},
  // }

  // fetch(
  //   'https://tasty.p.rapidapi.com/recipes/list?from=0&size=2&tags=under_30_minutes%2Chealthy',
  //   options,
  // )
}

const markRecipeAsFavorite = () => {}

const addRecipe = () => {}

const deleteRecipe = () => {}

export default fetchRecipes
