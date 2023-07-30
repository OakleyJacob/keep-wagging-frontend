import { render, screen } from "@testing-library/react";
import DogShow from "../pages/DogShow";
import {mockDogs} from '../assets/MockDog'
import { MemoryRouter, Routes, Route } from "react-router-dom";




describe("<DogShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/dogshow/1"]}>
        <Routes>
          <Route path="/dogshow/:id" element={<DogShow dogs={mockDogs} />}/>
        </Routes>
      </MemoryRouter>
    )})

  it("has photo", () => {
    expect(screen.getByRole('img', {
      name: /photo of rocky/i
    })).toBeInTheDocument()
  })

  it("has pa username", () => {
    expect(screen.getByRole('heading', {
      name: /name: rocky/i
    })).toBeInTheDocument()
  })

  it("has user description", () => {
    expect(screen.getByText(/description: we can fill it later rocky/i)).toBeInTheDocument()
  })

  it("has vaccination status", () => {
    expect(screen.getByText(/vaccinated: yes/i)).toBeInTheDocument()
  })

  it("has age", () => {
    expect(screen.getByRole('heading', { name: /age: 7/i })).toBeInTheDocument()
  })
  
  it("has submit button", () => {
    expect(screen.getByRole('button', {name: /edit dog/i})).toBeInTheDocument()
  })

  it("has delete button", () => {
    expect(screen.getByRole('button', {name: /adopt me/i})).toBeInTheDocument()
  })
})