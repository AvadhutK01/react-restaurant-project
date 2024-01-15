import './App.css';
import MainComponent from './components/Layout/Main/MainComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderSuccess from './components/Orders/OrderSuccess';
import AdminComponent from './components/Admin/AdminComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/order" element={<OrderSuccess />} />
          <Route path="/" element={<MainComponent />} />
          <Route path='/Admin' element={<AdminComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
