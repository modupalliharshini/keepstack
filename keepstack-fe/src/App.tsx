import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/"
            element={<Signup />}
          />
          <Route
            path="/signin"
            element={<Signin />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
