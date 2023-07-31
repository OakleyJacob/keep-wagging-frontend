import { render, screen } from '@testing-library/react';
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"


describe("<Header />", () => {
  beforeEach(() => {
    render(
     <BrowserRouter>
        <Header currentUser={null} />
     </BrowserRouter>
    )})

  it("renders without crashing", () => {
      const headerPart = screen.getByRole('heading')
      expect(headerPart).toBeInTheDocument()
  })
  
  it("has sign up button", () => {
    expect(screen.getByRole('button', {name: /sign up/i})).toBeInTheDocument
  })

  it("has sign in button", () => {
    expect(screen.getByRole('button', {name: /sign in/i})).toBeInTheDocument
  })
})


