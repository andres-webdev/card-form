import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import App from "../App"

describe("Testing App", () => {
    test("Should render cards and form section", () => {
        render(<App />)

        const cardsSection = screen.getByTestId("cardsSection")
        const formSection = screen.getByTestId("formSection")

        expect(cardsSection).toBeInTheDocument()
        expect(formSection).toBeInTheDocument()
    })

    test("Should render cards and congrats section", async () => {
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
    })
})