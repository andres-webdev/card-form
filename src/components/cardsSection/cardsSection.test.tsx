import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import CardsSection from "./CardsSection";

describe("Testing cards section", () => {
    test("Should render card section", () => {
        render(<CardsSection />);

        const frontCard = screen.getByAltText("card-front")
        const backCard = screen.getByAltText("card-back")

        expect(screen.getByTestId("cardsSection")).toBeInTheDocument();
        expect(frontCard).toBeInTheDocument()
        expect(backCard).toBeInTheDocument()
    })

    test("Should show cards information", () => {
        render(<CardsSection />);

        const cardNumber = screen.getByRole("heading", {level: 1})
        const cardLogo = screen.getByTestId("front-card-logo")
        const smallCardLogo = screen.getByTestId("front-small-card-logo")
        const [cardName, expiredDateCard] = screen.getAllByRole("heading", {level:2})
        const secureCodeCard = screen.getByRole("heading", {level:3})

        expect(cardNumber).toBeInTheDocument()
        expect(cardLogo).toBeInTheDocument()
        expect(smallCardLogo).toBeInTheDocument()
        expect(cardName).toBeInTheDocument()
        expect(expiredDateCard).toBeInTheDocument()
        expect(secureCodeCard).toBeInTheDocument()
    })
})