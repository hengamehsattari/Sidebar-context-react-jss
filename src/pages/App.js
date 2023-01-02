import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SharedLayout from "./SharedLayout";
import Team from "./SharedLayout";
import Sidebar from "../components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
