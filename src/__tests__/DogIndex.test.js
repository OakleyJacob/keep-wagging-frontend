import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DogIndex from "../pages/DogIndex";
import {mockDogs} from '../assets/MockDog'



describe("<Dog Index/>", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <DogIndex dogs={mockDogs}/>
    </BrowserRouter>
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
    expect(screen.getAllByRole('heading', { name: /vaccinated: yes/i })).toBeInTheDocument
  })

  it("has age", () => {
    expect(screen.getByRole('heading', { name: /age: 7/i })).toBeInTheDocument
  })
})