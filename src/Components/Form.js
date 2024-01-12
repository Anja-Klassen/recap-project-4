import React, { useState } from "react";

//export default function Form({ onAddActivity }) => {
//  const[activity, setActivity] = useState({
//    name: "activity",
//  isForGoodWeather:true,
//});

const Form = ({ onAddActivity }) => {
  const [activity, setActivity] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newActivity = {
      id: uid(),
      name: activity,
      isForGoodWeather,
    };

    onAddActivity(newActivity);

    setActivity("");
    setIsForGoodWeather(true);
    document.getElementById("activityName").focus();
  };

  const uid = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  // return (
  //     <form onSubmit={handleSubmit}>
  //       <h1>Add new Activity:</h1>
  //       <label htmlFor="activityName">Name:</label>
  //       <input name="activityName" id="activityName">
  //         Name of Activity
  //       </input>
  //       <label htmlFor="checkbox">Good-weather activity:</label>
  //       <input type="checkbox" name="checkbox" id="checkbox"></input>
  //       <input type="submit" value="Submit" />
  //     </form>

  // );
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <label>
        Activity Name:
        <input
          type="text"
          id="activityName"
          value={activity}
          onChange={(event) => setActivity(event.target.value)}
          required
        />
      </label>
      <label>
        Is it for good weather?
        <input
          type="checkbox"
          checked={isForGoodWeather}
          onChange={() => setIsForGoodWeather(!isForGoodWeather)}
        />
      </label>
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default Form;
