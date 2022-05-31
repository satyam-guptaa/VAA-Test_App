import React from 'react'
import FiltersSection from '../filters'
import {fireEvent, render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import {jest} from '@jest/globals'

const onClick = jest.fn()

test("to check the header text of price filer", ()=>{
    const {getByTestId} = render(<FiltersSection />);
    const headerEl = getByTestId("priceFilter");

    expect(headerEl.textContent).toBe("Price")
})

test("to check the header text of rating filer", ()=>{
    const {getByTestId} = render(<FiltersSection />);
    const headerEl = getByTestId("ratingFilter");

    expect(headerEl.textContent).toBe("Rating")
})

test("to check the header text of facility filer", ()=>{
    const {getByTestId} = render(<FiltersSection />);
    const headerEl = getByTestId("facilityFilter");

    expect(headerEl.textContent).toBe("Facilities")
})

test("button does exists", () => {
    const {getByTestId} = render(<FiltersSection/>)
    const buttonEl = getByTestId("removeFilterBtn")

    expect(buttonEl).toBeInTheDocument()
})

test("button's text to be Remove filter", () => {
    const {getByTestId} = render(<FiltersSection/>)
    const buttonEl = getByTestId("removeFilterBtn")

    expect(buttonEl.textContent).toBe("Remove Filter")
})

test("button's text to be Remove filter", () => {
    const {getByTestId} = render(<FiltersSection/>)
    const buttonEl = getByTestId("removeFilterBtn")

    expect(buttonEl.textContent).toBe("Remove Filter")
})

// test("button's onClick is working for remove filter", () => {
//     const {getByTestId} = render(<FiltersSection/>)
//     const buttonEl = getByTestId("removeFilterBtn")
//     fireEvent.click(buttonEl)
//     expect(onClick).toHaveBeenCalledTimes(1)
// })