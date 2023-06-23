import {useState} from "react"
import CardsSection from './components/cardsSection/CardsSection'
import CongratsSection from './components/congratsSection/CongratsSection'
import FormSection from './components/formSection/FormSection'
import { GlobalState, HandleChangeCardInfo } from "./types"
import { cardNumberSpaces } from "./handlers"

const INITIAL_STATE =  {
  cardName: "",
  cardNumber: "",
  expiredDateMonth: "",
  expiredDateYear: "",
  secureCode: ""
}

function App() {

  const [state, setState] = useState<GlobalState>({data: INITIAL_STATE, showCongrats: false})

  const handleShowCongrats = ():void => {
    setState(elem => ({
      ...elem,
      showCongrats: !state.showCongrats
    }))
  }

  const handleChangeData = ({event, keyword}: HandleChangeCardInfo):void => {

    let value = event.target.value

    if(keyword !== true && event.target.name === "cardNumber") {
      value = cardNumberSpaces(event.target.value)
    } 

    setState(elem => ({
      ...elem,
      data: {
        ...elem.data,
        [event.target.name]: value
      }
    }))
  }

  const resetGlobalValues = ():void => {
    setState({data: INITIAL_STATE, showCongrats: false})
  }

  return (
    <main 
      className="w-full min-h-screen overflow-hidden lg:flex lg:flex-row">
      <CardsSection cardInfo={state.data} />
      {
        !state.showCongrats && <FormSection showCongratsSection={handleShowCongrats} handleChange={handleChangeData} cardInfo={state.data} />
      }
      {  
        state.showCongrats && <CongratsSection showFormSection={handleShowCongrats} resetState={resetGlobalValues} />
      }
    </main>
  )
}

export default App
