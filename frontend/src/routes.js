import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cliente from "./Cliente";
import Usuario from "./pages/Usuario";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<Login />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/usuario" element={<Usuario />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
