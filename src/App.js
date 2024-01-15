import React from "react";
import "./App.css";
import Form from "./Components/Form.js";
import List from "./Components/List.js";
import useLocalStorageState from "use-local-storage-state";

const initialActivities = [
  { id: 3847, name: "Reading inside", isForGoodWeather: false },
  { id: 2648, name: "Go for a walk", isForGoodWeather: true },
];

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });

  const isGoodWeather = false;
  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  return (
    <>
      <div className="App">
        <Form onAddActivity={handleAddActivity} />
        <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      </div>
    </>
  );
}

export default App;
