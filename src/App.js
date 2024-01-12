import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form.js";

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  return (
    <>
      <div className="App">
        <Form onAddActivity={handleAddActivity} />
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.name} -{" "}
              {activity.isForGoodWeather ? "Good Weather" : "Bad Weather"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

//<header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//    </a>
//  </header> //
