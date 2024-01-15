import React from "react";

export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name} -
          {activity.isForGoodWeather ? "Good Weather" : "Bad Weather"}
        </li>
      ))}
    </ul>
  );
}
