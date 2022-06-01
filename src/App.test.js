import React from "react";
import App from "../src/App";
import Form from "./components/MainPage/form/form";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FiltersSection from "./components/results/filters/filters";

describe("App testing", () => {
  it("navbar header renders with correct text in App component", () => {
    const { getByTestId } = render(<App />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Virgin Atlantic Holidays");
  });

  it("location input to contain initial value as empty string in Form component", () => {
    const { getByTestId } = render(<Form />);
    const inputEl = getByTestId("location");

    expect(inputEl.value).toBe("");
  });

  it("input location lable to be Destination in Form component", () => {
    const { getByTestId } = render(<Form />);
    const headerEl = getByTestId("inputHeader");

    expect(headerEl.textContent).toBe("Destination");
  });

  it("location input to have Location as placeholder in Form component", () => {
    const { getByTestId } = render(<Form />);
    const inputEl = getByTestId("location");

    expect(inputEl.placeholder).toBe("Please select a location...");
  });

  it("to check location input getting value on change in Form component", () => {
    const { getByTestId } = render(<Form />);
    const inputEl = getByTestId("location");

    fireEvent.change(inputEl, { target: { value: "toronto" } });
    expect(inputEl.value).toBe("toronto");
  });

  it("button does exists", () => {
    const { getByTestId } = render(<Form />);
    const buttonEl = getByTestId("formBtn");

    expect(buttonEl).toBeInTheDocument();
  });

  it("button's text to be Search", () => {
    const { getByTestId } = render(<Form />);
    const buttonEl = getByTestId("formBtn");

    expect(buttonEl.textContent).toBe("Search");
  });

  it("to check the header text of price filer", () => {
    const { getByTestId } = render(<FiltersSection />);
    const headerEl = getByTestId("priceFilter");

    expect(headerEl.textContent).toBe("Price");
  });

  it("to check the header text of rating filer", () => {
    const { getByTestId } = render(<FiltersSection />);
    const headerEl = getByTestId("ratingFilter");

    expect(headerEl.textContent).toBe("Rating");
  });

  it("to check the header text of facility filer", () => {
    const { getByTestId } = render(<FiltersSection />);
    const headerEl = getByTestId("facilityFilter");

    expect(headerEl.textContent).toBe("Facilities");
  });

  it("button does exists", () => {
    const { getByTestId } = render(<FiltersSection />);
    const buttonEl = getByTestId("removeFilterBtn");

    expect(buttonEl).toBeInTheDocument();
  });

  it("button's text to be Remove filter", () => {
    const { getByTestId } = render(<FiltersSection />);
    const buttonEl = getByTestId("removeFilterBtn");

    expect(buttonEl.textContent).toBe("Remove Filter");
  });

  it("button's text to be Remove filter", () => {
    const { getByTestId } = render(<FiltersSection />);
    const buttonEl = getByTestId("removeFilterBtn");

    expect(buttonEl.textContent).toBe("Remove Filter");
  });
});
