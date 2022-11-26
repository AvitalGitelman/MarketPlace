import './App.css';

import MarketPlace from './components/marketPlace';
import ItemPage from './components/ItemPage';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MarketPlace />} />
        <Route path="/item/:name" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
