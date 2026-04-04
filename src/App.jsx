

import './App.css'
import { Greeting, UserCheck } from './components/day-1-conditional-rendering/scrip'
import { FruitList, ListRendering } from './components/day-2-render-list-in-react/scrip'

function App() {
  const loggedIN= "true"
  return (
   <>
   <Greeting isLoggedIn={loggedIN}/>
   <UserCheck/>
   <ListRendering/>
   <FruitList/>
   </>
  )
}

export default App
