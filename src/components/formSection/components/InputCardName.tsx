import { CardData, StateValidation, handlerChangeInfo } from "../../../types";
import ErrorMessage from "./ErrorMessage";

interface CardNameProps {
    validations: StateValidation['validations'],
    cardName: CardData['cardName'],
    handleChangeCardData: handlerChangeInfo['handler']
}

export default function InputCardName({validations, cardName, handleChangeCardData} : CardNameProps){
    return (
        <label htmlFor="cardName" className="mb-5 w-full inline-block">
            <span
                className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
            >CARDHOLDER NAME</span>
            <input 
                className={`w-full border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text cursor-pointer ${(validations.inputChangeValidations.cardName || (validations.blankState && !cardName)) ? `border-inpur-error
                text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : "border-input-border"}`}
                type="text"
                id="cardName"
                name="cardName"
                maxLength={30}
                value={cardName}
                onChange={handleChangeCardData}
                placeholder="e.g. Jane Appleseed" />
            {
                validations.inputChangeValidations.cardName &&
                <ErrorMessage message="Wrong format, letters only" />
            }
            {
                (!cardName && validations.blankState) &&
                <ErrorMessage message="Can't be blank" />
            }
        </label>
    )
}