import{ BrowserRouter as Router, Routes, Route }from "react-router-dom"

import Login from "./Login";
import Cliente from "./Cliente";
import Usuario from "./Usuario"



function App() {
  return (
    <div>  
   
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/cliente" element={<Cliente/>} /> 
        <Route path="/usuario" element={<Usuario/>} />
      </Routes>
    </Router>
  
  </div>
  );
}

export default App;

