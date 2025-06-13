import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3002/api/users`)
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;