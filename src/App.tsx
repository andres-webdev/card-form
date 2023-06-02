import {useState} from "react"
import CardsSection from './components/cardsSection/CardsSection'
import CongratsSection from './components/congratsSection/CongratsSection'
import FormSection from './components/formSection/FormSection'

export interface GlobalState {
  showCongrats: boolean
}

function App() {

  const [state, setState] = useState<GlobalState>({showCongrats:false})

  const handleShowCongrats = ():void => {
    setState(elem => ({
      ...elem,
      showCongrats: !state.showCongrats
    }))
  }

  return (
    <main 
      className="w-full min-h-screen lg:flex lg:flex-row">
      <CardsSection />
      {
        !state.showCongrats && <FormSection showCongratsSection={handleShowCongrats} />
      }
      {  
        state.showCongrats && <CongratsSection showFormSection={handleShowCongrats} />
      }
    </main>
  )
}

export default App
