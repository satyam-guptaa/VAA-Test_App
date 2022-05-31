import Form from "../form"
import {fireEvent, render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import React from 'react'

test("location input to contain initial value as empty string", () => {
    const {getByTestId} = render(<Form/>)
    const inputEl = getByTestId("location")

    expect(inputEl.value).toBe("")
})

test("input location lable to be Destination", () => {
    const {getByTestId} = render(<Form/>)
    const headerEl = getByTestId("inputHeader")

    expect(headerEl.textContent).toBe("Destination")
})

test("location input to have Location as placeholder", () => {
    const {getByTestId} = render(<Form/>)
    const inputEl = getByTestId("location")

    expect(inputEl.placeholder).toBe("Please select a location...")
})

test("to check location input getting value on change", () => {
    const {getByTestId} = render(<Form/>)
    const inputEl = getByTestId("location")

    fireEvent.change(inputEl, {target: {value: "toronto"}})
    expect(inputEl.value).toBe("toronto")
})

test("button does exists", () => {
    const {getByTestId} = render(<Form/>)
    const buttonEl = getByTestId("formBtn")

    expect(buttonEl).toBeInTheDocument()
})

test("button's text to be Search", () => {
    const {getByTestId} = render(<Form/>)
    const buttonEl = getByTestId("formBtn")

    expect(buttonEl.textContent).toBe("Search")
})
