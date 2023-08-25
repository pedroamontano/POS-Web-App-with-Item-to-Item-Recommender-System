import React from "react";
import "./ItemList.scss";
import { useState } from "react";
import addIcon from "../../assets/images/add.svg";
import subIcon from "../../assets/images/subtract.svg";
import minamiImg from "../../assets/images/minamisoma shower oil.png";

const itemsData = [
  {
    id: 1,
    imgUrl: minamiImg,
    name: "Minamisoma",
    description: "SHOWER OIL",
    price: 10.5,
  },
];

const ItemComponent = ({ item, count, onCountChange }) => {
  const itemTotalPrice = item.price * count;
  return (
    <>
    
    <div className="cart">
     <p className="cart-p">Cart({count})</p> 
    </div>

      <div className="item-container">
        <div className="item-container__top">
          {/* Image at the left */}
          <div className="item-image">
            <img src={item.imgUrl} alt={item.name} />
          </div>

          {/* Name, Description, and Count in the middle */}
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>

          {/* Price at the right */}
          <div className="item-price">${itemTotalPrice.toFixed(2)}</div>
        </div>

        <div className="item-container__bottom">
          <div className="counter">
            <button onClick={() => onCountChange(Math.max(count - 1, 0))}>

                <img className="subIcon" src={subIcon} alt="sub" />

            </button>
            <span>{count}</span>
            <button onClick={() => onCountChange(count + 1)}>
              <img src={addIcon} alt="add" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ItemList = ({setTotalPrice}) => {
  const initialCounts = itemsData.reduce(
    (acc, item) => ({ ...acc, [item.id]: 1 }),
    {}
  ); // Initializing with 1 count for each item
  const [itemCounts, setItemCounts] = useState(initialCounts);

  const handleItemCountChange = (id, newCount) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount,
    }));
  };
  const newTotalPrice = itemsData.reduce(
    (sum, item) => {
      if(item.id in itemCounts) {
        return sum + itemCounts[item.id] * item.price;
      }
      return sum;
    },
    0
  );

  setTotalPrice(newTotalPrice);

  return (
    <div className="item-list">
      {itemsData.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          count={itemCounts[item.id]}
          onCountChange={(newCount) => handleItemCountChange(item.id, newCount)}
        />
      ))}
    </div>
  );
};

export default ItemList;
