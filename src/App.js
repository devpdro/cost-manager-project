import NavBar from './components/NavBar'

// import Home from './pages/Home'
// import Projects from './pages/Projects'
// import Contact from './pages/Contact';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <h1>React Rounter</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}

export default App;
