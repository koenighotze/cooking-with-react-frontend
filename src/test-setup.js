import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { v4 } from 'uuid'
import { expect, afterEach } from 'vitest'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)
window.crypto.randomUUID = v4

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
