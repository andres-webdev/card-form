import { CardData, StateValidation, handlerChangeInfo } from "../../../types"
import ErrorMessage from "./ErrorMessage"

interface CardExpirationCodesProps {
    validations: StateValidation['validations'],
    cardExpirationMonth: CardData['expiredDateMonth'],
    cardExpirationYear: CardData['expiredDateYear'],
    handleChangeCardData: handlerChangeInfo['handler']
}

export default function InputCardExpirationCodes({validations, cardExpirationMonth, cardExpirationYear, handleChangeCardData}: CardExpirationCodesProps){

    const numbersOnly = validations.inputChangeValidations.expiredDateMonth || validations.inputChangeValidations.expiredDateYear

    const showErrorLength = validations.inputLenghtValidation && (cardExpirationMonth.length > 0 && cardExpirationMonth.length < 2 || cardExpirationYear.length > 0 && cardExpirationYear.length < 2)

    return (
        <label htmlFor="expiredDate" className="flex flex-col">
            <span
                className=" text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
            >EXP. DATE (MM/YY)</span>
            <div className="flex gap-2 mb-1">
                <input 
                    className={`w-72px border rounded-lg px-4 py-padding-input-top-bottom text-18px cursor-pointer leading-movil-input-text ${(validations.inputChangeValidations.expiredDateMonth || (validations.blankState && !cardExpirationMonth) || (validations.inputLenghtValidation && cardExpirationMonth.length < 2)) ? `border-inpur-error
                    text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                    id="expiredDate"
                    name="expiredDateMonth"
                    value={cardExpirationMonth}
                    placeholder="MM"
                    type="text" 
                    inputMode="numeric"
                    onChange={handleChangeCardData}
                    maxLength={2}
                />
                <input 
                    className={`w-72px border rounded-lg px-4 py-padding-input-top-bottom text-18px cursor-pointer leading-movil-input-text mr-3 ${(validations.inputChangeValidations.expiredDateYear || (validations.blankState && !cardExpirationYear) || (validations.inputLenghtValidation && cardExpirationYear.length < 2)) ? `border-inpur-error
                    text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                    name="expiredDateYear"
                    placeholder="YY"
                    type="text"
                    inputMode="numeric"
                    value={cardExpirationYear}
                    onChange={handleChangeCardData}
                    data-testid="expiredDateYear"
                    maxLength={2}
                />
            </div>
            {
                numbersOnly &&
                <ErrorMessage message="Numbers only" />
            }
            {
                ((!cardExpirationMonth || !cardExpirationYear) && validations.blankState) &&
                <ErrorMessage message="Can't be blank" />
            }
            {
                showErrorLength &&
                <ErrorMessage message="Wrong format, just 2 digits" />
            }
        </label>
    )
}