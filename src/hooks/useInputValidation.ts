import { useReducer } from "react"
import { InputReducerAction, StateValidation } from "../types"

const INITIAL_STATE = {
    inputChangeValidations: {
        cardName: false,
        cardNumber: false,
        expiredDateMonth: false,
        expiredDateYear: false,
        secureCode: false
    },
    blankState: false,
    backSpace: false,
    inputLenghtValidation: false
}

const inputValidationReducer = (state: StateValidation['validations'], action: InputReducerAction) => {
    switch (action.type) {
        case 'input_validation': {
            const { inputName, value } = action.payload

            return {
                ...state,
                ['inputChangeValidations']: {
                    ...state.inputChangeValidations,
                    [inputName]: value
                }
            }
        }

        case 'blank_space': {

            return {
                ...state,
                ['blankState']: action.payload
            }
        }

        case 'back_space': {

            return {
                ...state,
                ['backSpace']: action.payload
            }
        }

        case 'input_lenght': {

            return {
                ...state,
                ['inputLenghtValidation']: action.payload
            }
        }
    
        default:
            return INITIAL_STATE;
    }
}

const useInputValidation = () => {
    return useReducer(inputValidationReducer, INITIAL_STATE)
}

export default useInputValidation