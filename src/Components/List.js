import React from "react"; 

const List = ({ activities }) => { 
return (
<ul>
{activities.map((activity) => (
  <li key={activity.id}>
    {activity.name} -{" "}
    {activity.isForGoodWeather ? "Good Weather" : "Bad Weather"}
  </li>
))}
</ul>
)
}

export default List;