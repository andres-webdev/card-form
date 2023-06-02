import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import FormSection from "./FormSection"

describe("Testing cards section", () => {
    test("Should render card section", () => {

        const fn = jest.fn()

        render(<FormSection showCongratsSection={fn} />)

        const inputFields = screen.getAllByRole("textbox")
        const confirmBtn = screen.getByRole("button")

        expect(screen.getByRole("form")).toBeInTheDocument()
        expect(inputFields.length).toBe(5)
        expect(confirmBtn).toBeInTheDocument()
    })
})