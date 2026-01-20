import Navbar from "./components/Navbar.jsx";
import Summary from "./components/summary.jsx";

import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Navbar />
        <Summary />
      </div>
    </main>
  );
}

export default App;
