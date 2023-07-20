import { render, screen } from '@testing-library/react';
import Navigation from "../components/Navigation"
import { BrowserRouter } from "react-router-dom"


describe("<Navigation />", () => {
  beforeEach(() => {
    render(
     <BrowserRouter>
        <Navigation />
     </BrowserRouter>
     )})

    it("has dogs button", () => {
      expect(screen.getByRole('button', {name: /dogs/i})).toBeInTheDocument
    })
    it("has home button", () => {
      expect(screen.getByRole('button', {name: /home/i})).toBeInTheDocument
    })
    it("has aboutus button", () => {
      expect(screen.getByRole('button', {name: /aboutus/i})).toBeInTheDocument
    })
})