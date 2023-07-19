import { render, screen } from "@testing-library/react";
import DogShow from "../pages/DogShow";
import {mockDogs} from '../assets/MockDog'
import { MemoryRouter, Routes, Route } from "react-router-dom";




describe("<DogShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/dogshow/0"]}>
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
    })).toBeInTheDocument
  })



  it("has user description", () => {

    expect(screen.getByText(/description: we can fill it later rocky/i)).toBeInTheDocument
  })

  it("has vaccination status", () => {
    expect(screen.getByRole('heading', { name: /vaccinated: yes/i })).toBeInTheDocument
  })

  it("has age", () => {
    expect(screen.getByRole('heading', { name: /age: 7/i })).toBeInTheDocument
  })
})