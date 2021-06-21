import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isBright, setisBright] = useState(false);

  function changeMode() {
    setisBright((isBright => {return !isBright}));
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  
  return (
    
    <div className={"App " + (isBright ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{isBright? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

//<div className={"App " + (false ? "dark" : "light")}></div>