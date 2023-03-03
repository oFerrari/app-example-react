import { useState } from 'react'
import './style.css'

export function StateExample(){
    console.log('renderizou')
   /*  const name ='Whrite' */
    const [name,setName] = useState("")

    function handleInput(event:React.ChangeEvent<HTMLInputElement>){ 
        setName(event.target.value)
        console.log("Disparou Evento")
    }
    return(
        <>
            <h1>State Example</h1>
            <input onInput={handleInput} className='inputName' type="text"/>
            <h1>{name}</h1>
        </>
    )
}