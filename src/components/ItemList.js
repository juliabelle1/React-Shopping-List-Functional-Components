import { useState } from "react"
export const ItemList = ({item, removeItemCallback }) => {

    const[completed, setCompleted] = useState('')

    
    const changeClass = () =>{
        setCompleted(!completed);
    };
    
    const removeItem = e => {
        e.preventDefault();
        if(!completed)
        return

        removeItemCallback(item.id)
    }


    return (
        <div>
            <div className="border bg-white d-flex justify-content-between align-items-center p-1 mb-2 rounded mt-2">
        
                <p onClick ={changeClass} className={completed ? "completed" : ""}>{item.name}</p>

                <div>
                <button className = "btn btn-primary btn-sm mx-2"><ion-icon name="pencil-outline"></ion-icon></button>
                <button className ="btn btn-danger btn-sm"
                onClick = {removeItem} ><ion-icon name="close-outline"></ion-icon></button>
                </div>
            </div>
        </div>
        )

}
