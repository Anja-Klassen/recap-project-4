import React, { useEffect, useState } from "react";
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

  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();

      setWeather(weather);
    }
    startFetching();
  }, []);

  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
  });

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  return (
    <>
      <div className="App">
        <h1>
          {weather.condition} {weather.temperature} °C
        </h1>
        <List
          activities={filteredActivities}
          isGoodWeather={weather.isGoodWeather}
        />
        <Form onAddActivity={handleAddActivity} />
      </div>
    </>
  );
}

export default App;
