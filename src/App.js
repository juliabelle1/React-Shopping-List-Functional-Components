import { useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import AddShoppingItem from './components/AddShoppingItem';
import Header from './components/Header'
import { ItemList } from './components/ItemList';


function App() {
  
  const[itemName, setItemName] = useState('');



  const[items, setItems] = useState([
    { id: uuidv4(), name: 'Milk', completed: false },
    { id: uuidv4(), name: 'Cola', completed: false},
    { id: uuidv4(), name: 'Bread', completed: false},
    { id: uuidv4(), name: 'Water', completed: false }
  ]);




  //toggle Completed

const changeClassCallback = (item) =>{
  item.completed = !item.completed
  setItems(oldItem => {
      oldItem.sort((a, b) => a.completed - b.completed)
      return [...oldItem]
})
}
  
  //add items

  const addItemCallback = (name) => {
    setItems(oldItems => {
        return [...oldItems, { id: uuidv4(), name, completed: false }]
    })
  }

  
  //delete items
  const removeItemCallback = (id) => {
    setItems(oldItems => {
      return oldItems.filter(item => item.id !== id)
    })
  }


    // Change Items


  const changeItemCallback = (id, newName) => {
    setItems(oldItems => {
      const newItems = oldItems.map(item => {
        if(item.id === id) {
          item.name = newName
          return item
        }
        return item
      })
      return newItems
    })
  }



  return (
    <div>
      <Header title = "Shopping list"/>
      <div className = " container mt-5">
      <AddShoppingItem addItemCallback = { addItemCallback } itemName={itemName} setItemName={setItemName}/>
      {
        items && items.map(item =>
          (<ItemList removeItemCallback = {removeItemCallback} item={item} key={item.id} changeItemCallback = {changeItemCallback} changeClassCallback = {changeClassCallback} /> ))
      }

      {
        !items.length && (
          <div>
            <p> No items to show</p>
          </div>
        )
      }
      </div>
    </div>



  );
}


export default App;
