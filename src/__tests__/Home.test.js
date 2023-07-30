import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";



describe("<Home />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )})

  it("has name label", () => {
    screen.logTestingPlaygroundURL()
    expect(screen.getByTestId(/homevideo/i)).toBeInTheDocument
  })
})