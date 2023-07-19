import { render, screen } from '@testing-library/react';
import Navigation from "../components/Navigation"
import { BrowserRouter } from "react-router-dom"


describe("<Navigation />", () => {
  it("renders without crashing", () => {
    render(
     <BrowserRouter>
        <Navigation />
     </BrowserRouter>
    )

  const navigationPart = screen.getByText("Navigation")
  expect(navigationPart).toBeInTheDocument()
  
  })
})