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
    expect(screen.getByPlaceholderText(/type dog's name here/i)
    ).toBeInTheDocument
  })

  it("has species label", () => {
    expect(screen.getByText(/dog's age/i)).toBeInTheDocument
  })

  it("has species field", () => {
    expect(screen.getByRole('spinbutton')
    ).toBeInTheDocument
  })

  it("has img label", () => {  
    expect(screen.getByText(/dog's description/i)).toBeInTheDocument
  })

  it("has img field", () => {
    expect(screen.getByPlaceholderText(/describe your buddy here/i)
    ).toBeInTheDocument
  })

  it("has personality field", () => {
    expect(screen.getByText(/check here if dog is vaccinated/i)
    ).toBeInTheDocument
  })
  it("has favorite activities label", () => {
    expect(screen.getByRole('checkbox')).toBeInTheDocument
  })

  it("has favorite activities field", () => {
    expect(screen.getByText(/dog's image/i)
    ).toBeInTheDocument
  })
  it("has size label", () => {
    expect(screen.getByPlaceholderText(/url here/i)).toBeInTheDocument
  })

  it("has size field", () => {
    expect(screen.getByRole('button', {
        name: /submit/i
      })
    ).toBeInTheDocument
  })
})