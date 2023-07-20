import { render, screen } from "@testing-library/react";
import {MemoryRouter, Route, Routes } from "react-router-dom";
import DogEdit from "../pages/DogEdit";
import { mockDogs } from "../assets/MockDog";



describe("<DogEdit />", () => {
  beforeEach(() => {
    render(
        <MemoryRouter initialEntries={["/dogedit/1"]}>
            <Routes>
                <Route path="/dogedit/:id" element={<DogEdit dogs={mockDogs} />}/>
            </Routes>
       </MemoryRouter>
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

  it("has species field", () => {
    expect(screen.getByRole('spinbutton')).toBeInTheDocument
  })

  it("has description label", () => {  
    expect(screen.getByText(/dog's description/i)).toBeInTheDocument
  })

  it("has description", () => {
    expect(screen.getByPlaceholderText(/describe your buddy here/i)).toBeInTheDocument
  })

  it("has vaccination status", () => {
    expect(screen.getByText(/check here if dog is vaccinated/i)).toBeInTheDocument
  })

  it("has vaccination status", () => {
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