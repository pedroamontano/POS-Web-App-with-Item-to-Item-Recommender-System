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
  // {
  //   id: 2,
  //   imgUrl: "https://via.placeholder.com/100",
  //   name: "Item B",
  //   description: "This is a description for Item B.",
  //   price: 29.99,
  // },
  // {
  //   id: 3,
  //   imgUrl: "https://via.placeholder.com/100",
  //   name: "Item C",
  //   description: "This is a description for Item C.",
  //   price: 24.99,
  // },
  // {
  //   id: 4,
  //   imgUrl: "https://via.placeholder.com/100",
  //   name: "Item D",
  //   description: "This is a description for Item D.",
  //   price: 15.99,
  // },
];

const ItemComponent = ({ item, count, onCountChange }) => {
  const itemTotalPrice = item.price * count;
  return (
    <>
    <div className="cart">
     <p className="cart-p">Cart(1)</p> 
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
                <img classname="subIcon" src={subIcon} alt="sub" />
            </button>
            <span>{count}</span>
            <button onClick={() => onCountChange(count + 1)}>
              <img src={addIcon} alt = "add" />

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ItemList = () => {
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

  const totalPrice = itemsData.reduce(
    (sum, item) => sum + itemCounts[item.id] * item.price,
    0
  );

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
