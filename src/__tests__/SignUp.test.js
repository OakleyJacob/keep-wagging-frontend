import { render, screen } from '@testing-library/react';
import SignUp from "../components/SignUp"
import { BrowserRouter } from "react-router-dom"


describe("<Header />", () => {
  beforeEach(() => {
    render(
     <BrowserRouter>
        <SignUp modal = {true} />
     </BrowserRouter>
    )})

  it("has a heading", () => {
      const headerPart = screen.getByRole('heading', {
        name: /sign on up!/i
      })
      expect(headerPart).toBeInTheDocument()
  })
  
  it("has email label", () => {
    expect(screen.getByText(/email/i)).toBeInTheDocument
  })
    
  it("has email field", () => {
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument
  })

  it("has password label", () => {
    expect(screen.getByText(/enter password/i)).toBeInTheDocument
  })
    
  it("has password field", () => {
    expect(screen.getByPlaceholderText(/enter password here/i)).toBeInTheDocument
  })

  it("has confirm password label", () => {
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument
  })
    
  it("has confirm password field", () => {
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument
  })

  it("has sign up button", () => {
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument
  })

  it("has sign in button", () => {
    expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument
  })
})


