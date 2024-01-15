import './App.css';
import MainComponent from './components/Layout/Main/MainComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderSuccess from './components/Orders/OrderSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/order" element={<OrderSuccess />} />
          <Route path="/" element={<MainComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
