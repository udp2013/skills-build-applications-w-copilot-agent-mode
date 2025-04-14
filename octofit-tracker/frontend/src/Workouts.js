import React, { useEffect, useState } from 'react';
import './App.css';

const BASE_URL = "https://animated-umbrella-x54pv4vq66r29v4x-8000.app.github.dev";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/workouts/`)
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="Workouts">
      <h1>Workouts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
              <td>{workout.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
