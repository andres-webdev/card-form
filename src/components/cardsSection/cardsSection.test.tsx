import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import CardsSection from "./CardsSection";

const sample =  {
    cardName: "Andres Marquez",
    cardNumber: "1234567890123456",
    expiredDateMonth: '01',
    expiredDateYear: '24',
    secureCode: "943"
}

describe("Testing cards section", () => {
    test("Should render card section", () => {

        render(<CardsSection cardInfo={sample} />);

        const frontCard = screen.getByAltText("card-front")
        const backCard = screen.getByAltText("card-back")

        expect(screen.getByTestId("cardsSection")).toBeInTheDocument();
        expect(frontCard).toBeInTheDocument()
        expect(backCard).toBeInTheDocument()
    })

    test("Should show cards information", () => {
        render(<CardsSection cardInfo={sample} />);

        const cardNumber = screen.getByRole("heading", {level: 1})
        const cardLogo = screen.getByTestId("front-card-logo")
        const smallCardLogo = screen.getByTestId("front-small-card-logo")
        const cardName = screen.getByRole("heading", {level:2})
        const secureCodeCard = screen.getByRole("heading", {level:3})
        const expMonth = screen.getByTestId("expDateMonth")
        const expYear = screen.getByTestId("expDateYear")

        expect(cardNumber).toBeInTheDocument()
        expect(cardLogo).toBeInTheDocument()
        expect(smallCardLogo).toBeInTheDocument()
        expect(cardName).toBeInTheDocument()
        expect(expMonth).toBeInTheDocument()
        expect(expYear).toBeInTheDocument()
        expect(secureCodeCard).toBeInTheDocument()
    })
})