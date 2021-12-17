import { useState } from "react"
import ChangeItem from "./ChangeItem"
export const ItemList = ({item, removeItemCallback, changeClassCallback, changeItemCallback }) => {


    const [change, setChange] = useState(false);

        const toggleChange = () => {
        setChange(change => !change)
        }
    
        const changeText = (text) => {
        changeItemCallback(item.id, text)
        setChange(false)
        }
    


    const changeClass = () => {
        changeClassCallback(item)
    }
    
    
    const removeItem = (e) => {
        e.preventDefault();
        if(!item.completed)
        return

        removeItemCallback(item.id)
    }


    return (
        <div>
            <div className="border bg-white d-flex justify-content-between align-items-center p-1 mb-2 rounded mt-2">
                { change
                    ? <ChangeItem item = {item} changeText = {changeText}/>
                    :<p className={item.completed ? "completed" : ""} >{item.name}</p>
                }
                <div>
                <button onClick ={() => changeClass(item)} className = "btn btn-primary btn-sm mx-2"><ion-icon name="checkmark-outline"></ion-icon></button>
                <button onClick={toggleChange} className = "btn btn-warning btn-sm mx-2"><ion-icon name="pencil-outline"></ion-icon></button>
                {/* <button onClick={toggleChange} className = "btn btn-warning btn-sm mx-2">{change ? <ion-icon name="checkmark-done-outline"></ion-icon> : <ion-icon name="pencil-outline"></ion-icon>}</button> */}
                {/* { change
                   ? <button onClick={toggleChange} className = "btn btn-warning btn-sm mx-2"><ion-icon name="checkmark-done-outline"></ion-icon></button>
                    :<button onClick={handleSubmit} className = "btn btn-warning btn-sm mx-2"><ion-icon name="pencil-outline"></ion-icon></button>
                } */}
                <button className ="btn btn-danger btn-sm"
                onClick = {removeItem} ><ion-icon name="close-outline"></ion-icon></button>
                </div>
            </div>
        </div>
        )

}
