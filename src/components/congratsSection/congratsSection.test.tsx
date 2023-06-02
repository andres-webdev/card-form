import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import CongratsSection from "./CongratsSection"

describe("Testing congrats section", () => {
    test("Should render congrats section", () => {

        const fn = jest.fn()

        render(<CongratsSection showFormSection={fn} />)

        const confirmImg = screen.getByAltText("conmfirm-img")
        const [continueBtn, backBtn] = screen.getAllByRole("button")
        const title = screen.getByText("THANK YOU!")
        const subTitle = screen.getByText("We've added your card details")

        expect(confirmImg).toBeInTheDocument()
        expect(continueBtn && backBtn).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(subTitle).toBeInTheDocument()
    })
})