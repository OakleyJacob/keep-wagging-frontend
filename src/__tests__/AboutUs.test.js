import { render, screen } from '@testing-library/react';
import AboutUs from "../pages/AboutUs"
import { BrowserRouter } from "react-router-dom"


describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    render(
     <BrowserRouter>
        <AboutUs />
     </BrowserRouter>
    )

  const aboutUsHeading = screen.getByText("AboutUs")
  expect(aboutUsHeading).toBeInTheDocument()
  
  })
})