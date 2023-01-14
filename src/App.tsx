import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn/SignIn";
import Dashboard from "./Dashboard/Dashboard";
import View from "./ViewUser/View";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/user/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
