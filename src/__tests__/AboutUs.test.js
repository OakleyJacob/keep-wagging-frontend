import { render, screen } from '@testing-library/react';
import AboutUs from "../pages/AboutUs"
import { BrowserRouter } from "react-router-dom"


describe("<AboutUs />", () => {
  beforeEach(() => {
    render(
     <BrowserRouter>
        <AboutUs />
     </BrowserRouter>
  )})

  it("has image", () => {
    expect(screen.getAllByRole('img').length).toEqual(3)
  })

  it("has name", () => {
    expect(screen.getByText(/jacob oakley/i)).toBeInTheDocument()
  })
  
  it("has name", () => {
    expect(screen.getByText(/miguel molina/i)).toBeInTheDocument()
  })
  
  it("has name", () => {
    expect(screen.getByText(/paul gooden/i)).toBeInTheDocument()
  })
  
  it("has text in back of card", () => {
    expect(screen.getByText(/as tech lead i was responsible for ensuring all code functioned as advertised, as well as maintaining proper tests and procedures with version control\./i)).toBeInTheDocument()
  })
  
  it("has text in back of card", () => {
    expect(screen.getByText(/as a Project Manager I was responsible for managing the workflow of the team, and maintaining the work and team work enviroment professional and enjoyble\./i)).toBeInTheDocument()
  })
  
  it("has text in back of card", () => {
    expect(screen.getByText(/as a Design Lead I was responsible for implementing the visual side of the website. With creativity and experience, brought life to the webpage\./i)).toBeInTheDocument()
  })
  
  it("has title", () => {
    expect(screen.getByRole('heading', { name: /tech lead/i })).toBeInTheDocument()
  })
  
  it("has title", () => {
    expect(screen.getByRole('heading', { name: /project manager/i })).toBeInTheDocument()
  })
  
  it("has title", () => {
    expect(screen.getByRole('heading', { name: /design lead/i })).toBeInTheDocument()
  })
})


