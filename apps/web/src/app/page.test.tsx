import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Page from './page'

describe('/', () => {
    it('works', async () => {
        render(await Page())

        expect(screen.getByRole('img')).toBeDefined()
    })
})
