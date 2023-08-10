import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy, sell, updateTotal } from "../store/storeSlice/storeSlice";

function Card({ item }) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const prevValueRef = useRef();
  const products = useSelector((state) => state.money.items);
  const total = useSelector((state) => state.money.value);

  useEffect(() => {
    if (prevValueRef.current !== undefined && prevValueRef.current !== value) {
      console.log("Value has changed:", products);
    }
    prevValueRef.current = value;
  }, [value]);

  const handleInputChange = (e) => {
    let newValue = parseInt(e.target.value) || 0; 
    
    const remainingTotal = total + (value * item.price); 
    const maxQuantity = Math.floor(remainingTotal / item.price);
    if (newValue > maxQuantity) {
      newValue = maxQuantity;
    }
    
    const difference = newValue - value; 
  
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        handleBuy(); 
      }
    } else if (difference < 0) {
      for (let i = 0; i < Math.abs(difference); i++) {
        handleSell(); 
      }
    }
    setValue(newValue);
  };
  

  
  

  const handleBuy = () => {
    setValue(value + 1);
    dispatch(buy({ title: item.title, number: 1 }));
    dispatch(updateTotal(-item.price));
    console.log("Total value:", total);
  };

  const handleSell = () => {
    if (value > 0) {
      setValue(value - 1);
      dispatch(sell({ title: item.title, number: 1 }));
      dispatch(updateTotal(item.price));
      console.log("Total value:", total);
    }
  };

  return (
    <div>
      <div key={item.id} className="card">
        <div className="image">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="title">{item.title}</div>
        <div className="price">${item.price}</div>
        <div className="cardControl">
          <button
            style={{
              backgroundColor: value > 0 ? "red" : "#f1f2f6",
              color: value > 0 ? "#fff" : "#333",
            }}
            name="number"
            className="red"
            onClick={(e) => handleSell(e)}
          >
            Sell
          </button>
          <input
            name="number"
            type="number"
            className="inputNumber"
            value={value > 0 ? value : ""}
            onChange={handleInputChange}
          />
          <button
            onClick={(e) => handleBuy(e)}
            disabled={item.price > total}
            className={item.price > total ? "null" : "green"}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
