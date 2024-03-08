import { test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe } from 'node:test'
import React from 'react'
import App from './App'

describe('All', () => {
    test('Renders without error', () => {
        render(<App />)
    })
})
