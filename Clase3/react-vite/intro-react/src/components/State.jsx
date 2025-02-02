import { useState } from "react";


export const State = ({initialState, titulo, bestState}) => {
   
    const [contador, setContador] = useState(initialState)
    //     nombre    funcion que actualiza el estado     (estado inicial);
    return(
        <>  
            <div>Saludos desde State.jsx
                <p>{titulo}</p>
                <p>Is this the best state: {bestState}</p>
            <div>El contador tiene valor: {contador}</div>

            <button onClick={() => setContador(contador+1)}>+1</button>
            </div>
        </>
    )
}