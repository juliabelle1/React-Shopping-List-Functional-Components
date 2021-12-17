import { useState, useEffect, useRef } from "react"

export default function ChangeItem({item, changeText}) {


    const [text, setText] = useState('');
    const input = useRef();
    
        useEffect(() => {
        setText(item.name)
        input.current.focus()
        }, [item.name])
    
        const handleSubmit = (e) => {
        e.preventDefault()
        changeText(text)
        }
        
    return (
    <form className='change-item' onSubmit= {handleSubmit}>
        <input type="text" ref={input} value={text} onChange={e => setText(e.target.value)} />
        <button className="btn btn-success btn-sm mx-2"><ion-icon name="checkmark-done-outline"></ion-icon></button>
    </form>
    )
}
