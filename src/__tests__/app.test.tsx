import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import App from "../App"
import { cardNumberSpaces } from "../handlers"

const sample =  {
    cardName: "Andres Marquez",
    cardNumber: "0000000000000000",
    expiredDateMonth: '01',
    expiredDateYear: '24',
    secureCode: '943'
}

describe("Testing App", () => {
    test("Should render cards and form section", () => {
        render(<App />)

        const cardsSection = screen.getByTestId("cardsSection")
        const formSection = screen.getByTestId("formSection")

        expect(cardsSection).toBeInTheDocument()
        expect(formSection).toBeInTheDocument()
    })

    /* test("Should render cards and congrats section", async () => {
        render(<App />)

        const cardsSection = screen.getByTestId("cardsSection")
        const formSection = screen.getByTestId("formSection")
        const submitBtn = screen.getByRole("button")

        expect(cardsSection).toBeInTheDocument()
        expect(formSection).toBeInTheDocument()

        userEvent.click(submitBtn)

        const congratsSection = await screen.findByTestId("congratsSection")

        expect(congratsSection).toBeInTheDocument()
        expect(formSection).not.toBeInTheDocument()

        const backBtn = screen.getByTestId("backBtn")

        userEvent.click(backBtn)

        const submitSectionShow = await screen.findByTestId("formSection")

        expect(submitSectionShow).toBeInTheDocument()
    }) */
})

describe("Show info data when is submited", () => {
    test("Should show card name when is submited", async () => {
        render(<App />)

        const nameInput = screen.getByLabelText("CARDHOLDER NAME", {selector: 'input'})

        await userEvent.type(nameInput, sample.cardName)

        expect(nameInput).toHaveValue(sample.cardName)
        
        const infoElements = screen.getAllByRole("heading", {level: 2}).map(elem => elem.textContent)

        const cardName = infoElements.find(elem => elem === sample.cardName)

        expect(cardName).not.toBeUndefined()
        expect(cardName).toBe(sample.cardName)
    })

    test("Should show card number when is submited", async () => {
        render(<App />)

        const numberInput = screen.getByLabelText("CARD NUMBER", {selector: 'input'})

        await userEvent.type(numberInput, sample.cardNumber)

        const newCardNumber = cardNumberSpaces(sample.cardNumber)

        expect(numberInput).toHaveValue(newCardNumber)
        
        const cardNumber = screen.getByRole("heading", {level: 1}).textContent

        expect(cardNumber).not.toBeUndefined()
        expect(cardNumber).toBe(newCardNumber)
    })

    test("Should show card expiration month when is submited", async () => {
        render(<App />)

        const expMonthInput = screen.getByLabelText("EXP. DATE (MM/YY)", {selector: 'input'})

        await userEvent.type(expMonthInput, sample.expiredDateMonth)

        expect(expMonthInput).toHaveValue(sample.expiredDateMonth)

        const expMonth = screen.getByTestId('expDateMonth').textContent

        expect(expMonth).not.toBeUndefined()
        expect(expMonth).toMatch(sample.expiredDateMonth)
    })

    test("Should show card expiration year when is submited", async () => {
        render(<App />)

        const expYearInput = screen.getByTestId("expiredDateYear")

        await userEvent.type(expYearInput, sample.expiredDateYear)

        expect(expYearInput).toHaveValue(sample.expiredDateYear)

        const expYear = screen.getByTestId('expDateYear').textContent

        expect(expYear).not.toBeUndefined()
        expect(expYear).toMatch(sample.expiredDateYear)
    })

    test("Should show card CVC when is submited", async () => {
        render(<App />)

        const cvcInput = screen.getByLabelText("CVC", {selector: 'input'})

        await userEvent.type(cvcInput, sample.secureCode)

        expect(cvcInput).toHaveValue(sample.secureCode)

        const infoElements = screen.getByRole("heading", {level: 3}).textContent

        expect(infoElements).not.toBeUndefined()
        expect(infoElements).toBe(sample.secureCode)
    })
})

describe("Validate input fields", () => {
    test("Should show a error message if the card name is wrote wrong", async () => {
        render(<App />)

        const nameInput = screen.getByLabelText("CARDHOLDER NAME", {selector: 'input'})

        await userEvent.type(nameInput, 'Andres M4')

        const nameValidation = screen.getByText("Wrong format, letters only")

        expect(nameValidation).toBeInTheDocument()
    })

    test("Should show a error message if the card number is wrote wrong", async () => {
        render(<App />)

        const numberInput = screen.getByLabelText("CARD NUMBER", {selector: 'input'})

        await userEvent.type(numberInput, '000000122344454Y')

        const numberValidation = screen.getByText("Wrong format, numbers only")

        expect(numberValidation).toBeInTheDocument()
    })

    test("Should show a error message if the expired month is wrote wrong", async () => {
        render(<App />)

        const expMonthInput = screen.getByLabelText("EXP. DATE (MM/YY)", {selector: 'input'})

        await userEvent.type(expMonthInput, "2O")

        const numberValidation = screen.getByText("Numbers only")

        expect(numberValidation).toBeInTheDocument()
    })

    test("Should show a error message if the expired year is wrote wrong", async () => {
        render(<App />)

        const expYearInput = screen.getByTestId("expiredDateYear")

        await userEvent.type(expYearInput, "3O")

        const numberValidation = screen.getByText("Numbers only")

        expect(numberValidation).toBeInTheDocument()
    })

    test("Should show a error message if the secure code is wrote wrong", async () => {
        render(<App />)

        const secureCode = screen.getByLabelText("CVC", {selector: 'input'})

        await userEvent.type(secureCode, "20O")

        const numberValidation = screen.getByText("Numbers only")

        expect(numberValidation).toBeInTheDocument()
    })
})

describe("Submit validation", () => {
    test("Should show 4 errors messages if all input fields are empty", async () => {
        render(<App />)

        const button = screen.getByRole('button')

        await userEvent.click(button)

        const errorMessages = screen.getAllByText("Can't be blank")

        expect(errorMessages.length).toBe(4)
    })
})