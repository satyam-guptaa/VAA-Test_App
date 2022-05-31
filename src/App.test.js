import React from 'react'
import App from '../src/App'
import {render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

test("navbar header renders with correct text", () => {
    const {getByTestId} = render(<App />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Virgin Atlantic Holidays")
})

// other test cases are in the respective component's folder with __test__ subfolder.