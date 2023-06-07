import { CardData, InputReducerAction, StateValidation, handlerChangeInfo } from "../../../types"
import ErrorMessage from "./ErrorMessage"

interface CardNumberProps {
    validations: StateValidation['validations'],
    cardNumber: CardData['cardName'],
    handleChangeCardData: handlerChangeInfo['handler'],
    dispatch: (value: InputReducerAction) => void
}

export default function InputCardNumber({validations, cardNumber, handleChangeCardData, dispatch} : CardNumberProps){

    const handleKeywordBackSpace = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Backspace'){
            dispatch({
                type: "back_space",
                payload: true
            })
        } else {
            dispatch({
                type: "back_space",
                payload: false
            })
        }
    }

    return (
        <label htmlFor="cardNumber" className="mb-5 w-full inline-block">
            <span
                className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
            >CARD NUMBER</span>
            <input 
                className={`w-full border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text cursor-pointer ${(validations.inputChangeValidations.cardNumber || (validations.blankState && !cardNumber) || (validations.inputLenghtValidation && cardNumber.length < 19)) ? `border-inpur-error
                text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                type="text"
                id="cardNumber"
                maxLength={19}
                name="cardNumber"
                value={cardNumber}
                onKeyDown={handleKeywordBackSpace}
                onChange={handleChangeCardData}
                placeholder="e.g. 1234 5678 9123 0000"
            />
            {
                validations.inputChangeValidations.cardNumber &&
                <ErrorMessage message="Wrong format, numbers only" />
            }
            {
                (!cardNumber && validations.blankState) &&
                <ErrorMessage message="Can't be blank" />
            }
            {
                (validations.inputLenghtValidation && (cardNumber.length > 0 && cardNumber.length < 19)) &&
                <ErrorMessage message="Wrong format, at least 16 digits" />
            }
        </label>
    )
}