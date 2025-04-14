import React, { useEffect, useState } from 'react';
import './App.css';

const BASE_URL = "https://animated-umbrella-x54pv4vq66r29v4x-8000.app.github.dev";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Use BASE_URL for API calls
    fetch(`${BASE_URL}/api/activities/`)
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="Activities">
      <h1>Activities</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>{activity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
