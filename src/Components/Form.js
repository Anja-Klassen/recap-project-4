import React, { useState } from "react";

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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity:</h2>
      <label>
        Name:
        <input
          type="text"
          id="activityName"
          value={activity}
          onChange={(event) => setActivity(event.target.value)}
          required
        />
      </label>
      <label>
        Good-weather activity:
        <input
          type="checkbox"
          checked={isForGoodWeather}
          onChange={() => setIsForGoodWeather(!isForGoodWeather)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
