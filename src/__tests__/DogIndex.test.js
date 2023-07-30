import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DogIndex from "../pages/DogIndex";
import {mockDogs} from '../assets/MockDog'



describe("<Dog Index/>", () => {
  const readDogs = () => {
    return null
  }
  beforeEach(() => {
    render(
    <BrowserRouter>
      <DogIndex dogs={mockDogs} readDogs={readDogs}/>
    </BrowserRouter>
  )})

  it("has photo", () => {
    expect(screen.getByRole('img', {name: /profile of a dog named julio/i})).toBeInTheDocument()
  })

  it("has a username", () => {
    expect(screen.getByRole('heading', { name: /victoria/i})).toBeInTheDocument()
  })
  it("has age", () => {
    expect(screen.getByRole('heading', { name: /i am 7 doggy years old\./i
    })).toBeInTheDocument
  })
  it("has button", () => {
    expect(screen.getAllByRole('link', { name: /click to love/i })).toBeInTheDocument
  })
})