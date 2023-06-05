import { CardData, InputReducerAction, StateValidation } from "../../../types";

export default function errorValidation(validation: StateValidation["validations"], showCongratsSection: () => void, cardInfo: CardData, dispatch: (value: InputReducerAction) => void): void{

    const enableSubmitBtn = Object.values(validation.inputChangeValidations).every(elem => elem === false)

    const findBlankSpaces = Object.values(cardInfo).every(elem => elem !== '')

    const inputLengthValidation = cardInfo.cardNumber.length === 19 && cardInfo.expiredDateMonth.length === 2 && cardInfo.expiredDateYear.length === 2 && cardInfo.secureCode.length === 3

    console.log(findBlankSpaces)

    if(enableSubmitBtn === true && findBlankSpaces === true && inputLengthValidation === true){
        showCongratsSection()
        dispatch({
            type: "blank_space",
            payload: false
        })
        dispatch({
            type: "input_lenght",
            payload: false
        })
    } else if(findBlankSpaces === false){
        dispatch({
            type: "blank_space",
            payload: true
        })
    } else if(inputLengthValidation === false){
        dispatch({
            type: "input_lenght",
            payload: true
        })
    }
}