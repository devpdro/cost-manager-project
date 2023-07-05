import { Outlet } from "react-router-dom";
// import Home from './pages/Home'
// import Projects from './pages/Projects'
// import Contact from './pages/Contact';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
