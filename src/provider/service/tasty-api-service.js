import samples from './samples'

const fetchRecipes = async (MOCK_MODE = false) => {
  if (MOCK_MODE) {
    return samples
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f6090e508emshb0c2338e1dc77f9p13e945jsnbbc2bba0f799',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  }

  fetch(
    'https://tasty.p.rapidapi.com/recipes/list?from=0&size=2&tags=under_30_minutes%2Chealthy',
    options,
  )
}

export default fetchRecipes
