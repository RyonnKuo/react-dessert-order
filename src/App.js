import React, { useState } from 'react';
import './App.css';

function App() {
  // M
  const pricePerUnit = 100;
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(pricePerUnit);
  const [selectedDessert, setSelectedDessert] = useState("草莓蛋糕");

  const desserts = [
    { name: "草莓蛋糕", price: 100 },
    { name: "栗子蛋糕", price: 120 },
    { name: "千層蛋糕", price: 150 }
  ];

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    const dessertPrice = desserts.find(d => d.name === selectedDessert).price;
    setTotalAmount(newQuantity * dessertPrice);
  };

  const handleDessertChange = (e) => {
    const newDessert = e.target.value;
    setSelectedDessert(newDessert);
    const dessertPrice = desserts.find(d => d.name === newDessert).price;
    setTotalAmount(quantity * dessertPrice);
  };

  return (
    // V
    <div className="app-container">
      <h1 className="page-title">選購甜點</h1>

      {/* 下拉選單：甜點項目 */}
      <div className="input-section">
        <label htmlFor="dessert-select">甜點項目</label>
        <select
          id="dessert-select"
          name="Dessert_Name"
          value={selectedDessert}
          onChange={handleDessertChange}
        >
          {desserts.map((dessert) => (
            <option key={dessert.name} value={dessert.name}>
              {dessert.name}
            </option>
          ))}
        </select>
      </div>

      {/* 輸入框：選購數量 */}
      <div className="input-section">
        <label htmlFor="dessert-quantity">選購數量</label>
        <input
          type="number"
          id="dessert-quantity"
          name="Dessert_Number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      {/* 顯示總金額 */}
      <div className="input-section">
        <label>總金額</label>
        <div className="total-amount">NT$ {totalAmount}</div>
      </div>
    </div>
  );
}

export default App;
