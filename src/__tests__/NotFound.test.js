import { render, screen } from '@testing-library/react';
import NotFound from "../pages/NotFound"
import { BrowserRouter } from "react-router-dom"


describe("<NotFound />", () => {
  beforeEach(() => {
    render(
     <BrowserRouter>
        <NotFound />
     </BrowserRouter>
  )})

  it("has image", () => {
    expect(screen.getByRole('img', { name: /404/i })).toBeInTheDocument()
  })
  it("has text", () => {
    expect(screen.getByText(/you seem to have lost your way!/i)).toBeInTheDocument()
  })
  it("has button", () => {
    expect(screen.getByRole('button', { name: /click here to return home!/i })).toBeInTheDocument()
  })
    
  })
