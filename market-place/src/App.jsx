import './App.css';
import { useState } from 'react'
import MarketPlace from './components/marketPlace';
import { ShoppingList } from './components/ShoppingList';
import ItemPage from './components/ItemPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { sendPurchase } from './providers/itemsProvider';

function App() {
  const [buyItems, setBuyItems] = useState([]);

  const onAdd = (item, amount) => {
    const findIndex = buyItems.findIndex(_ => _._id === item._id);

    if (findIndex < 0) return setBuyItems(prev => [...prev, {...item, amount}]); 

    const totalAmount = buyItems[findIndex].amount + amount;

    setBuyItems(prev => prev.map(_ => _._id === item._id ? {..._, amount: totalAmount} : _));
  }

  const onBuy = async (totalPrice) => {
    await sendPurchase({
      totalPrice,
      itemsIds: buyItems.map(item => item._id)
    })

    setBuyItems([]);
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MarketPlace onAdd={onAdd} />} />
        <Route exact path="/cart" element={<ShoppingList products={buyItems} onAdd={onAdd} onBuy={onBuy} />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
