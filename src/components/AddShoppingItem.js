
export default function AddShoppingItem({ addItemCallback, setItemName, itemName}) {


    const addItem = (e) => {
        e.preventDefault();
        if(itemName.trim() === '')
        return

        addItemCallback(itemName);
        setItemName('');
    }

    


    return (
        <div>
        <form onSubmit={addItem} >
            <div className="text-center mb-4">
                <h3 className= "mt-3">Add item</h3>
            </div>
            <div className="input-group">
                <input type="text" className="form-control" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Enter item" />
                <button className="btn btn-success">Add Item</button>
            </div>
        </form>
        </div>
    )
}
