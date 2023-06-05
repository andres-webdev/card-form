import inputValidations from "./handlers/inputValidations"
import { CardData, HandleChangeCardInfo } from '../../types'
import errorValidation from './handlers/errorValidation'
import useInputValidation from '../../hooks/useInputValidation'

interface FormProps {
    showCongratsSection: () => void,
    handleChange: ({event, keyword}: HandleChangeCardInfo) => void,
    cardInfo: CardData
}

export default function FormSection({showCongratsSection, handleChange, cardInfo}: FormProps){

    const [validations, dispatch] = useInputValidation()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        errorValidation(validations, showCongratsSection, cardInfo, dispatch)
    }

    const handleChangeCardData = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        inputValidations(event, handleChange, validations, dispatch)
    }

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

    console.log(validations)

    return (
        <section 
            className="mt-margin-form-top mx-6 lg:w-96 lg:mr-auto lg:ml-auto lg:mt-form-section-margin-top"
            data-testid="formSection">
            <form 
                className="w-full"
                role="form"
                autoComplete='off' 
                onSubmit={handleSubmit}>
                <label htmlFor="cardName" className="mb-5 w-full inline-block">
                    <span
                        className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                    >CARDHOLDER NAME</span>
                    <input 
                        className={`w-full border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text ${(validations.inputChangeValidations.cardName || (validations.blankState && !cardInfo.cardName)) ? `border-inpur-error
                        text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : "border-input-border"}`}
                        type="text"
                        id="cardName"
                        name="cardName"
                        maxLength={30}
                        value={cardInfo.cardName}
                        onChange={handleChangeCardData}
                        placeholder="e.g. Jane Appleseed" />
                    {
                        validations.inputChangeValidations.cardName &&
                        <span
                            className='text-inpur-error text-xs ml-2'
                        >Wrong format, letters only</span>
                    }
                    {
                        (!cardInfo.cardName && validations.blankState) &&
                        <span
                            className='text-inpur-error text-xs ml-2'
                        >Can't be blank</span>
                    }
                </label>
                <label htmlFor="cardNumber" className="mb-5 w-full inline-block">
                    <span
                        className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                    >CARD NUMBER</span>
                    <input 
                        className={`w-full border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text ${(validations.inputChangeValidations.cardNumber || (validations.blankState && !cardInfo.cardNumber) || (validations.inputLenghtValidation && cardInfo.cardNumber.length < 19)) ? `border-inpur-error
                        text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                        type="text"
                        id="cardNumber"
                        maxLength={19}
                        name="cardNumber"
                        value={cardInfo.cardNumber}
                        onKeyDown={handleKeywordBackSpace}
                        onChange={handleChangeCardData}
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                    {
                        validations.inputChangeValidations.cardNumber &&
                        <span
                            className='text-inpur-error text-xs ml-2'
                        >Wrong format, numbers only</span>
                    }
                    {
                        (!cardInfo.cardNumber && validations.blankState) &&
                        <span
                            className='text-inpur-error text-xs ml-2'
                        >Can't be blank</span>
                    }
                    {
                        (validations.inputLenghtValidation && cardInfo.cardNumber.length < 19) &&
                        <span
                            className='text-inpur-error text-xs ml-2'
                        >Wrong format, at least 16 digits</span>
                    }
                </label>
                <div className="flex mb-7">
                    <label htmlFor="expiredDate" className="flex flex-col">
                        <span
                            className=" text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                        >EXP. DATE (MM/YY)</span>
                        <div className="flex gap-2 mb-1">
                            <input 
                                className={`w-72px border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text ${(validations.inputChangeValidations.expiredDateMonth || (validations.blankState && !cardInfo.expiredDateMonth) || (validations.inputLenghtValidation && (cardInfo.expiredDateMonth.length < 2 || cardInfo.expiredDateYear.length < 2))) ? `border-inpur-error
                                text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                                id="expiredDate"
                                name="expiredDateMonth"
                                value={cardInfo.expiredDateMonth}
                                placeholder="MM"
                                type="text" 
                                onChange={handleChangeCardData}
                                maxLength={2}
                            />
                            <input 
                                className={`w-72px border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text mr-3 ${(validations.inputChangeValidations.expiredDateYear || (validations.blankState && !cardInfo.expiredDateYear) || (validations.inputLenghtValidation && (cardInfo.expiredDateMonth.length < 2 || cardInfo.expiredDateYear.length < 2))) ? `border-inpur-error
                                text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                                name="expiredDateYear"
                                placeholder="YY"
                                type="text"
                                value={cardInfo.expiredDateYear}
                                onChange={handleChangeCardData}
                                data-testid="expiredDateYear"
                                maxLength={2}
                            />
                        </div>
                        {
                            (validations.inputChangeValidations.expiredDateMonth || validations.inputChangeValidations.expiredDateYear) &&
                            <span
                                className='text-inpur-error text-xs ml-2'
                            >Numbers only</span>
                        }
                        {
                            ((!cardInfo.expiredDateMonth || !cardInfo.expiredDateYear) && validations.blankState) &&
                            <span
                                className='text-inpur-error text-xs ml-2'
                            >Can't be blank</span>
                        }
                        {
                            (validations.inputLenghtValidation && (cardInfo.expiredDateMonth.length < 2 || cardInfo.expiredDateYear.length < 2)) &&
                            <span
                                className='text-inpur-error text-xs ml-2'
                            >Wrong format, just 2 digits</span>
                        }
                    </label>
                    <label htmlFor="secureCode" className="flex flex-col">
                        <span
                            className="text-xs font-semibold tracking-[2px] mb-margin-label-bottom inline-block"
                        >CVC</span>
                        <input 
                            className={`w-full border rounded-lg px-4 py-padding-input-top-bottom text-18px leading-movil-input-text mb-1 ${(validations.inputChangeValidations.secureCode || (validations.blankState && !cardInfo.secureCode) || (validations.inputLenghtValidation && cardInfo.secureCode.length < 3)) ? `border-inpur-error
                            text-inpur-error focus:border-inpur-error focus:border-2 focus:outline-none` : 'border-input-border'}`}
                            id="secureCode"
                            name="secureCode"
                            placeholder="e.g. 123"
                            type="text"
                            value={cardInfo.secureCode}
                            onChange={handleChangeCardData}
                            maxLength={3}
                        />
                        {
                            validations.inputChangeValidations.secureCode &&
                            <span
                                className='text-inpur-error text-xs ml-2'
                            >Numbers only</span>
                        }
                        {
                            (!cardInfo.secureCode && validations.blankState) &&
                            <span
                                className='text-inpur-error text-xs ml-2'
                            >Can't be blank</span>
                        }
                        {
                            (validations.inputLenghtValidation && cardInfo.secureCode.length < 3) &&
                            <span
                                className='text-inpur-error text-xs ml-2'
                            >Wrong format, just 3 digits</span>
                        }
                    </label>
                </div>
                <button
                    className="bg-black-violet w-full rounded-lg h-small-height-button text-white tracking-wider text-18px leading-movil-input-text"
                >Confirm</button>
            </form>
        </section>
    )
}