import inputValidations from "./handlers/inputValidations"
import { CardData, HandleChangeCardInfo } from '../../types'
import errorValidation from './handlers/errorValidation'
import useInputValidation from '../../hooks/useInputValidation'
import InputCardName from "./components/InputCardName"
import InputCardNumber from "./components/InputCardNumber"
import InputCardExpirationCodes from "./components/InputCardExpirationCodes"
import InputCardSecureCode from "./components/InputCardSecureCode"

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

    return (
        <section 
            className="mt-margin-form-top mx-6 lg:w-96 lg:mr-auto lg:ml-auto lg:mt-form-section-margin-top"
            data-testid="formSection">
            <form 
                className="w-full"
                role="form"
                autoComplete='off' 
                onSubmit={handleSubmit}> 
                <InputCardName 
                    validations={validations} 
                    cardName={cardInfo['cardName']} 
                    handleChangeCardData={handleChangeCardData} />
                <InputCardNumber 
                    validations={validations} 
                    cardNumber={cardInfo['cardNumber']} 
                    handleChangeCardData={handleChangeCardData} 
                    dispatch={dispatch} />
                
                <div className="flex mb-7">
                    
                    <InputCardExpirationCodes 
                        validations={validations} 
                        cardExpirationMonth={cardInfo['expiredDateMonth']}
                        cardExpirationYear={cardInfo['expiredDateYear']} 
                        handleChangeCardData={handleChangeCardData}
                    />

                    <InputCardSecureCode
                        validations={validations}
                        handleChangeCardData={handleChangeCardData} 
                        cardSecureCode={cardInfo['secureCode']}
                    />
                </div>
                <button
                    className="bg-black-violet w-full rounded-lg h-small-height-button text-white tracking-wider text-18px leading-movil-input-text hover:bg-gradient2 transition-all hover:ring-2 hover:ring-black-violet hover:ring-offset-2"
                >Confirm</button>
            </form>
        </section>
    )
}