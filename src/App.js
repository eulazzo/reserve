import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, List, Hotel, Login } from "./pages";

function App() {
  // const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
