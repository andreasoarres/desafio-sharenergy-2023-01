/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React  from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );

}

export default api;