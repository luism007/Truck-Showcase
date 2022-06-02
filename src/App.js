import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/common/navigation/NavigationBar";
import Home from "./components/home/Home";
import AdminDashboard from "./components/admin/AdminDashboard";

const App = (props) => {
  return (
    <div className="page-showcase">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
