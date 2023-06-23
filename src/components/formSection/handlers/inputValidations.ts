import { HandleChangeCardInfo, InputReducerAction, StateValidation } from "../../../types";

type Handler = ({event, keyword}: HandleChangeCardInfo) => void

export default function inputValidations (event: React.ChangeEvent<HTMLInputElement>, handleChange: Handler, validations: StateValidation["validations"], dispatch: (value: InputReducerAction) => void){

    const {name, value} = event.target
    
    switch (name) {
        case 'cardName': {

            const regx = new RegExp("^[a-zA-Z ]+$");
            
            const validateLetters = regx.test(value)

            if(value.length !== 0 && !validateLetters) {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: true
                    }
                })
            } else if(value.length > 30) {
                alert("The card name should have less than 30 letters")
            } else {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: false
                    }
                })
                handleChange({event})
            }
        }
            break;

        case 'cardNumber': {

            const regx = new RegExp("^[0-9\\s]+$");

            const validateNumbers = regx.test(value)

            if(value.length !== 0 && !validateNumbers) {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: true
                    }
                })
            } else {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: false
                    }
                })

                if(validations.backSpace === true){
                    console.log('backspace')
                    handleChange({event, keyword: true})
                } else {
                    handleChange({event})
                } 
            }
        }
            
            break;

        case 'expiredDateMonth': {

            const regx = new RegExp("^[0-9\\s]+$");
            
            const validateNumbers = regx.test(value)

            if(value.length !== 0 && !validateNumbers) {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: true
                    }
                })
            } else if(value.length > 2) {
                alert("The expiration month should have less than 3 number")
            } else {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: false
                    }
                })
                handleChange({event})
            }
        }
            break;

        case 'expiredDateYear': {

            const regx = new RegExp("^[0-9\\s]+$");
            
            const validateNumbers = regx.test(value)

            if(value.length !== 0 && !validateNumbers) {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: true
                    }
                })
            } else if(value.length > 2) {
                alert("The expiration year should have less than 3 number")
            } else {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: false
                    }
                })
                handleChange({event})
            }
        }
            break;
        
        case 'secureCode': {

            const regx = new RegExp("^[0-9\\s]+$");
            
            const validateNumbers = regx.test(value)

            if(value.length !== 0 && !validateNumbers) {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: true
                    }
                })
            } else if(value.length > 3) {
                alert("The secure code should have less than 4 number")
            } else {
                dispatch({
                    type: "input_validation",
                    payload: {
                        inputName: name,
                        value: false
                    }
                })
                handleChange({event})
            }
        }
            break;
    
        default:

            break;
    }
}