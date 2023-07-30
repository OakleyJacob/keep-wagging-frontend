import { render, screen } from '@testing-library/react';
import Navigation from "../components/Navigation"
import { BrowserRouter } from "react-router-dom"


describe("<Navigation />", () => {
  beforeEach(() => {
    render(
     <BrowserRouter>
        <Navigation/>
     </BrowserRouter>
     )})

    it("has dogs button", () => {
      expect(screen.getByTestId('home-icon')).toBeInTheDocument
    })
    
    it("has home button", () => {
      expect(screen.getByTestId('home-icon2')).toBeInTheDocument
    })
    
    it("has aboutus button", () => {
      expect(screen.getByTestId('home-icon3')).toBeInTheDocument
    })
    
    it("has add dog button", () => {
      expect(screen.getByTestId('home-icon4')).toBeInTheDocument
    })

    it("has donate button", () => {
      expect(screen.getByTestId('home-icon5')).toBeInTheDocument
    })
})