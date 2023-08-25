// import React from 'react';
// import './ItemList.scss';
// import { useState } from 'react';

// const ItemComponent = ({ item }) => {
//     const [count, setCount] = useState(item.count);

//     return (
//         <div className="item-container">
//             {/* Image at the left */}
//             <div className="item-image">
//                 <img src={item.imgUrl} alt={item.name} />
//             </div>

//             {/* Name, Description, and Count in the middle */}
//             <div className="item-details">
//                 <h3>{item.name}</h3>
//                 <p>{item.description}</p>
//                 <div className="counter">
//                     <button onClick={() => setCount(prevCount => Math.max(prevCount - 1, 0))}>-</button>
//                     <span>{count}</span>
//                     <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//                 </div>
//             </div>

//             {/* Price at the right */}
//             <div className="item-price">
//                 ${item.price.toFixed(2)}
//             </div>
//         </div>
//     );
// }

// const itemsData = [
//     {
//       id: 1,
//       imgUrl: 'https://via.placeholder.com/100',
//       name: 'Item A',
//       description: 'This is a description for Item A.',
//       count: 5,
//       price: 19.99
//     },
//     {
//       id: 2,
//       imgUrl: 'https://via.placeholder.com/100',
//       name: 'Item B',
//       description: 'This is a description for Item B.',
//       count: 12,
//       price: 29.99
//     },
//     {
//       id: 3,
//       imgUrl: 'https://via.placeholder.com/100',
//       name: 'Item C',
//       description: 'This is a description for Item C.',
//       count: 7,
//       price: 24.99
//     },
//     {
//       id: 4,
//       imgUrl: 'https://via.placeholder.com/100',
//       name: 'Item D',
//       description: 'This is a description for Item D.',
//       count: 10,
//       price: 15.99
//     }
//   ];

//   const ItemList = () => {
//     return (
//         <div className="item-list">
//             {itemsData.map(item => (
//                 <ItemComponent key={item.id} item={item} />
//             ))}
//         </div>
//     );
// }

// export default ItemList;

import React from 'react';
import './ItemList.scss';
import { useState } from 'react';

const itemsData = [
    {
        id: 1,
        imgUrl: 'https://via.placeholder.com/100',
        name: 'Item A',
        description: 'This is a description for Item A.',
        price: 19.99
    },
    {
        id: 2,
        imgUrl: 'https://via.placeholder.com/100',
        name: 'Item B',
        description: 'This is a description for Item B.',
        price: 29.99
    },
    {
        id: 3,
        imgUrl: 'https://via.placeholder.com/100',
        name: 'Item C',
        description: 'This is a description for Item C.',
        price: 24.99
    },
    {
        id: 4,
        imgUrl: 'https://via.placeholder.com/100',
        name: 'Item D',
        description: 'This is a description for Item D.',
        price: 15.99
    }
];

const ItemComponent = ({ item, count, onCountChange }) => {
    return (
        <div className="item-container">
            {/* Image at the left */}
            <div className="item-image">
                <img src={item.imgUrl} alt={item.name} />
            </div>

            {/* Name, Description, and Count in the middle */}
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="counter">
                    <button onClick={() => onCountChange(Math.max(count - 1, 0))}>-</button>
                    <span>{count}</span>
                    <button onClick={() => onCountChange(count + 1)}>+</button>
                </div>
            </div>

            {/* Price at the right */}
            <div className="item-price">
                ${item.price.toFixed(2)}
            </div>
        </div>
    );
}

const ItemList = () => {
    const initialCounts = itemsData.reduce((acc, item) => ({...acc, [item.id]: 1 }), {}); // Initializing with 1 count for each item
    const [itemCounts, setItemCounts] = useState(initialCounts);

    const handleItemCountChange = (id, newCount) => {
        setItemCounts(prevCounts => ({
            ...prevCounts,
            [id]: newCount
        }));
    };

    const totalPrice = itemsData.reduce((sum, item) => sum + (itemCounts[item.id] * item.price), 0);

    return (
        <div className="item-list">
            {itemsData.map(item => (
                <ItemComponent 
                    key={item.id} 
                    item={item}
                    count={itemCounts[item.id]} 
                    onCountChange={(newCount) => handleItemCountChange(item.id, newCount)}
                />
            ))}
            <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
        </div>
    );
}

export default ItemList;

