import { CardData, StateValidation, handlerChangeInfo } from "../../../types"
import ErrorMessage from "./ErrorMessage"

interface CardSecureCodeProps {
    validations: StateValidation['validations'],
    handleChangeCardData: handlerChangeInfo['handler'],
    cardSecureCode: CardData['secureCode']
}

export default function InputCardSecureCode({validations, handleChangeCardData, cardSecureCode}: CardSecureCodeProps){
    return (
        <label htmlFor="secureCode" className="flex flex-col">
            <span
                className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
            >CVC</span>
            <input 
                className={`w-full border rounded-lg px-4 py-padding-input-top-bottom text-18px cursor-pointer leading-movil-input-text mb-1 ${(validations.inputChangeValidations.secureCode || (validations.blankState && !cardSecureCode) || (validations.inputLenghtValidation && cardSecureCode.length < 3)) ? `border-inpur-error
                text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                id="secureCode"
                name="secureCode"
                placeholder="e.g. 123"
                type="text"
                inputMode="numeric"
                value={cardSecureCode}
                onChange={handleChangeCardData}
                maxLength={3}
            />
            {
                validations.inputChangeValidations.secureCode &&
                <ErrorMessage message="Numbers only" />
            }
            {
                (!cardSecureCode && validations.blankState) &&
                <ErrorMessage message="Can't be blank" />
            }
            {
                (validations.inputLenghtValidation && cardSecureCode.length > 0 && cardSecureCode.length < 3) &&
                <ErrorMessage message="Wrong format, just 3 digits" />
            }
        </label>
    )
}