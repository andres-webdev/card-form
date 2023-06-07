import { CardData, InputReducerAction, StateValidation } from "../../../types";

export default function errorValidation(validation: StateValidation["validations"], showCongratsSection: () => void, cardInfo: CardData, dispatch: (value: InputReducerAction) => void): void{

    const enableSubmitBtn = Object.values(validation.inputChangeValidations).every(elem => elem === false)

    const findBlankSpaces = Object.values(cardInfo).every(elem => elem !== '')

    const inputLengthValidation = cardInfo.cardNumber.length === 19 && cardInfo.expiredDateMonth.length === 2 && cardInfo.expiredDateYear.length === 2 && cardInfo.secureCode.length === 3

    if(enableSubmitBtn && findBlankSpaces && inputLengthValidation){
        showCongratsSection()
        dispatch({
            type: "blank_space",
            payload: false
        })
        dispatch({
            type: "input_lenght",
            payload: false
        })
    } else if(!findBlankSpaces){
        dispatch({
            type: "blank_space",
            payload: true
        })
        if(!inputLengthValidation){
            dispatch({
                type: "input_lenght",
                payload: true
            }) 
        }
    } else if(!inputLengthValidation){
        dispatch({
            type: "input_lenght",
            payload: true
        })
    }
}