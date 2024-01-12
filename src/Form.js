import React from "react";

export default function Form({ onAddActivity }) {
  return (
    <>
      <h1>Add new Activity:</h1>
      <label htmlFor="activityName">Name:</label>
      <input name="activityName" id="activityName">
        Name of Activity
      </input>
      <label htmlFor="checkbox">Good-weather activity:</label>
      <input type="checkbox" name="checkbox" id="checkbox"></input>
      <input type="submit" value="Submit" />
    </>
  );
}
