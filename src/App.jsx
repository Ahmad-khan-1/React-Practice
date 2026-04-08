import "./App.css";
import {
  Greeting,
  UserCheck,
} from "./components/day-1-conditional-rendering/scrip";
import {
  FruitList,
  ListRendering,
} from "./components/day-2-render-list-in-react/scrip";
import { Card } from "./components/day-3-Props/scrip";
import { MoodBoardItem } from "./components/day-3-Props/scrip2";
import { ChangeState } from "./components/day-4-State-in-react/script";
import { UpdatingArry } from "./components/Updating-array/scrip";
import { UpdatingState } from "./components/Updating-object-in-state/script";

function App() {
  const loggedIN = "true";
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games.",
    },
  ];
  return (
    <>
      <Greeting isLoggedIn={loggedIN} />
      <UserCheck />
      <ListRendering />
      <FruitList />
      {profiles.map((profiles) => {
        return (
          <Card
            key={profiles.id}
            name={profiles.name}
            title={profiles.title}
            bio={profiles.bio}
          />
        );
      })}
      <ChangeState />
      {/* <div className="mood-board">
        <MoodBoardItem
          color="lightblue"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Relaxing Beach"
        />
        <MoodBoardItem
          color="#f4a261"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Sunny Desert"
        />
        <MoodBoardItem
          color="#2a9d8f"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Serene Forest"
        />
      </div> */}
      <UpdatingState />
      <UpdatingArry />
    </>
  );
}

export default App;
