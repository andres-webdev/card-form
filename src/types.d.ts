export type CardData = {
    cardName: string,
    cardNumber: string,
    expiredDateMonth: string,
    expiredDateYear: string,
    secureCode: string
}

export interface GlobalState {
    data: CardData,
    showCongrats: boolean
}

export interface Validation {
    cardName: boolean,
    cardNumber: boolean,
    expiredDateMonth: boolean,
    expiredDateYear: boolean,
    secureCode: boolean
}

export interface HandleChangeCardInfo {
    event: React.ChangeEvent<HTMLInputElement>,
    keyword?: boolean
}

export interface StateValidation {
    validations: {
        inputChangeValidations: Validation,
        blankState: boolean,
        backSpace: boolean,
        inputLenghtValidation: boolean
    }
}

export type InputReducerAction = {
    type: "input_validation",
    payload: {
        inputName: string,
        value: boolean
    }
} | {
    type: "blank_space" | "back_space" | "input_lenght",
    payload: boolean
}
  
export interface handlerChangeInfo {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void
}