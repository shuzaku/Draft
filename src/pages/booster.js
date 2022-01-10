import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Deck = (props) => (
 <tr>
   <td>{props.card.name}</td>
   <td>{props.card.position}</td>

 </tr>
);

const BoosterBtn = () => (
  <button onClick={() =>{drawCards()}}> draw </button>
);

function drawCards() {
  var boosterSize = 10;
  var randomCards = []
  while(cards.length < boosterSize){
    var randomCardIndex = Math.floor(Math.random() * records.length) + 1;
    randomCards.push(records[randomCardIndex]);
    records.splice(randomCardIndex, 1);
  }
  const cards = randomCards;
};
 
export default function RecordList() {
 const [records, cards, setRecords, setCards] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);
  
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records);
    }
 
   getRecords();
 
   return;
 }, [records.length]);
 

 
 // This method will map out the records on the table
 function deckList() {
   return cards.map((card) => {
     return (
       <Deck
        card={card}
        key={card._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Booster</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
         </tr>
       </thead>
       <tbody>{deckList()}</tbody>
     </table>
   </div>
 );
}