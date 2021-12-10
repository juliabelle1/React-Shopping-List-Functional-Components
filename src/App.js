import { useState} from 'react';
import './App.css';
import AddShoppingItem from './components/AddShoppingItem';
import Header from './components/Header'
import { ItemList } from './components/ItemList';

function App() {
  

  const[items, setItems] = useState([
    { id: '1', name: 'Milk' },
    { id: '2', name: 'Cola' },
    { id: '3', name: 'Bread' },
    { id: '4', name: 'Water' }
  ])

  const addItemCallback = (itemName) => {
    setItems(oldItems => {
      return [...oldItems, { id: Date.now().toString(), name: itemName }]
    })
  }

  
  const removeItemCallback = (id) => {
    setItems(oldItems => {
      return oldItems.filter(item => item.id !== id)
    })
  }
  



  return (
    <div>
      <Header title = "Shopping list"/>
      <div className = " container mt-5">
          <AddShoppingItem addItemCallback = { addItemCallback } />
      {
        items && items.map(item =>(<ItemList removeItemCallback = {removeItemCallback} item={item} key={item.id}/> ))
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
