import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Details from "./screens/Details";
import routes from "./routes/navigation";

const App = () => {
  return (
    <Routes>
      <Route path={routes.welcome} element={<Welcome />} />
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.detail} element={<Details />} />
    </Routes>
  );
};

export default App;
