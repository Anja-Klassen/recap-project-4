import React, { useState , useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form.js";
import List from "./Components/List.js";

function App() {

  const initialActivities = JSON.parse(localStorage.getItem("activities")) || [];
  const [activities, setActivities] = useState(initialActivities);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);



  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  return (
    <>
      <div className="App">
        <Form onAddActivity={handleAddActivity} />
     <List activities= {activities}/>
      </div>
    </>
  );
}

export default App;
