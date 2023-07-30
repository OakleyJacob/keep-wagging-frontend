import { render, screen } from '@testing-library/react';
import Donations from "../pages/Donations"
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event';

describe("<Header />", () => {
    const donate = () => {
        return null
    }
  beforeEach(() => {
    render(
     <BrowserRouter>
        <Donations donate = {donate}/>
     </BrowserRouter>
    )})

  it("renders current donations", () => {
    expect(screen.getByRole('heading', {name: /current donations received! \$/i
      })).toBeInTheDocument()
  })

  it("renders 10 dollar button", () => {
    expect(screen.getByRole('button', { name: /\$10\.00/i})).toBeInTheDocument()
  })

  it("renders 20 dollar button", () => {
    expect(screen.getByRole('button', { name: /\$20\.00/i})).toBeInTheDocument()
  })

  it("renders 30 dollar button", () => {
    expect(screen.getByRole('button', { name: /\$30\.00/i})).toBeInTheDocument()
  })

  it("renders custom button", () => {
    expect(screen.getByRole('button', { name: /custom/i})).toBeInTheDocument()
  })

  it("has text", () => {
    userEvent.click(screen.getByRole('button', { name: /\$10\.00/i}))
    expect(screen.getByText(/you are amazing!/i)).toBeInTheDocument
  }) 

  it("has button", () => {
    userEvent.click(screen.getByRole('button', { name: /\$10\.00/i}))
    expect(screen.getByRole('button', {name: /close/i})).toBeInTheDocument
  }) 

  it("has text", () => {
    userEvent.click(screen.getByRole('button', { name: /\$10\.00/i}))
    expect(screen.getByText(/thank you so much for your donation!!/i)).toBeInTheDocument
  }) 

  it("has img", () => {
    userEvent.click(screen.getByRole('button', { name: /\$10\.00/i}))
    expect(screen.getByRole('img', {name: /thankyou/i})).toBeInTheDocument
  }) 

  it("has text", () => {
    userEvent.click(screen.getByRole('button', { name: /\$10\.00/i}))
    expect(screen.getByText(/click anywhere to go back to the site!/i)).toBeInTheDocument
  }) 
  
  it("has text", () => {
    userEvent.click(screen.getByRole('button', { name: /custom/i}))
    expect(screen.getByText(/we appreciate all of our donations\. how much would you like to give\?/i)).toBeInTheDocument
  }) 

  it("has text", () => {
    userEvent.click(screen.getByRole('button', { name: /custom/i}))
    expect(screen.getByRole('heading', {name: /thanks!/i})).toBeInTheDocument
  }) 

  it("has button", () => {
    userEvent.click(screen.getByRole('button', { name: /custom/i}))
    expect(screen.getByRole('button', {name: /close/i})).toBeInTheDocument
  }) 

  it("has text", () => {
    userEvent.click(screen.getByRole('button', { name: /custom/i}))
    expect(screen.getByText(/amount in dollars/i)).toBeInTheDocument
  }) 
})