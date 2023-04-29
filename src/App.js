import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Snickers from './Snickers';
import Skittles from './Skittles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Vending Machine</h1>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/snickers" element={<Snickers />} />
          <Route path="/skittles" element={<Skittles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
