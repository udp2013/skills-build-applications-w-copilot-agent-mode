import React, { useEffect, useState } from 'react';
import './App.css';

const BASE_URL = "https://animated-umbrella-x54pv4vq66r29v4x-8000.app.github.dev";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Use BASE_URL for API calls
    fetch(`${BASE_URL}/api/teams/`)
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="Teams">
      <h1>Teams</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.members.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
