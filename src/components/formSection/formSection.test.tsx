import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import FormSection from "./FormSection"

const sample =  {
    cardName: "Andres Marquez",
    cardNumber: "0000000000000000",
    expiredDateMonth: '01',
    expiredDateYear: '24',
    secureCode: '943'
}

describe("Testing cards section", () => {
    test("Should render card section", () => {

        const fn = jest.fn()
        const fn2 = jest.fn()

        render(<FormSection showCongratsSection={fn} handleChange={fn2} cardInfo={sample} />)

        const inputFields = screen.getAllByRole('textbox')
        const confirmBtn = screen.getByRole("button")

        expect(screen.getByRole("form")).toBeInTheDocument()
        expect(inputFields.length).toBe(5)
        expect(confirmBtn).toBeInTheDocument()
    })
})