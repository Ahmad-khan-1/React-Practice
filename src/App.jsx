

import './App.css'
import { Greeting, UserCheck } from './components/day-1-conditional-rendering/scrip'
import { FruitList, ListRendering } from './components/day-2-render-list-in-react/scrip'

function App() {
  const loggedIN = "true"
  const profiles = [{
    id: 1,
    name: "Mark",
    title: "Front-End developer",
    bio: "I like to work with different front-end technologies and play video games."
  }]
  return (
    <>
      <Greeting isLoggedIn={loggedIN} />
      <UserCheck />
      <ListRendering />
      <FruitList />
      {profiles.map((profiles) => {
        return <Card    
          key={profiles.id}
          name={profiles.name}
          title={profiles.title}
          bio={profiles.bio}
        />
      })}

    </>
  )
}

export default App
