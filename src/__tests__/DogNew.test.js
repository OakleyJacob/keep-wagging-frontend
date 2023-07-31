import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DogNew from "../pages/DogNew";



describe("<DogNew />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <DogNew />
    </BrowserRouter>
  )})

  it("has name label", () => {
    expect(screen.getByText(/dog's name/i)).toBeInTheDocument
  })
    
  it("has name field", () => {
    expect(screen.getByPlaceholderText(/type dog's name here/i)).toBeInTheDocument
  })

  it("has age label", () => {
    expect(screen.getByText(/dog's age/i)).toBeInTheDocument
  })
  
  it("has age field", () => {
    expect(screen.getByRole('spinbutton')).toBeInTheDocument
  })

  it("has description label", () => {  
    expect(screen.getByText(/dog's description/i)).toBeInTheDocument
  })

  it("has description field", () => {
    expect(screen.getByPlaceholderText(/describe your buddy here/i)).toBeInTheDocument
  })

  it("has vaccination label", () => {
    expect(screen.getByText(/check here if dog is vaccinated/i)).toBeInTheDocument
  })

  it("has vaccination field", () => {
    expect(screen.getByRole('checkbox')).toBeInTheDocument
  })

  it("has dog's image label", () => {
    expect(screen.getByText(/dog's image/i)).toBeInTheDocument
  })

  it("has image url field", () => {
    expect(screen.getByPlaceholderText(/url here/i)).toBeInTheDocument
  })

  it("has submit button", () => {
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument
  })
})