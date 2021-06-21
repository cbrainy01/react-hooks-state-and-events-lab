import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //items is an array of objects. It has 3 key value pairs(id, name, and category)
 
  //create a state variable which will store the value of the option user selected. It is set initially to "all"
  const [selectedCategory, setSelectedCategory] = useState("All");

  //in handleChange, were going to use the state setter to set the value of selectedCategory to "event.target.value"
  function handleChange(event) {
    const userSelection = event.target.value;
    setSelectedCategory(userSelection);
  }
  /**that selectedCategory variable will be used when rendering to get an array of items which are part of the selected category.
   * we'll iterate over the items array (the category key is what contains item category) to produce an array containing only the items where 
   * the item category matches the user selection
   */
  const updatedArray = items.filter( (item)=>{
      //the item goes through if its "category" is the same as the value for the option that was selected
      //there are 4 different selectedCategory values(all, produce, dairy, and dessert) if it happens to be "all", every item goes through to updatedArray
      //now if its not "all", then its compared to category values and if only those two match will the item make it to the updated array.
      if(selectedCategory === "All") {return true};
      return item.category === selectedCategory;
    } );
    
  //change the array from items to updatedArray. The items array wont be changing when page is re-rendering.
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(event)=>{return handleChange(event)}} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {updatedArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
