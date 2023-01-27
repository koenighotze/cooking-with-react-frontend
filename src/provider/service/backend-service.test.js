import fetchRecipes from './tasty-api-service'

describe('the tasty service', () => {
  describe('when fetching recipes', () => {
    describe('and running in MOCK mode', () => {
      it('should return the samples', async () => {
        const results = await fetchRecipes(true)

        expect(results).toHaveProperty('mockSamples')
        expect(results.mockSamples).toBeTruthy()
      })
    })

    describe('and running in NON-MOCK mode', () => {
      it('should call the api', async () => {})
    })
  })
})
