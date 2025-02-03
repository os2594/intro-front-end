import { useState } from "react"
import InputForm from "./components/inputForm"
import NavBar from "./components/NavBar"
import { Container, Row } from "react-bootstrap"



function App() {

  const[Tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...Tareas, e.target[0].value])
  }

  return (
    <>
     <NavBar title='Super React App' user='Osmar' />
     <Container>
        <h1 className="text-center mt-2">Titulo de App</h1>
        <Row>
          <InputForm 
            labelTitle="Enter Task" 
            buttonLabel="Add Task" 
            placeholder='Ingresa una tarea' 
            funcion={handleSubmit}
            />
            {
              Tareas
            }
        </Row>
     </Container>
    </>
  )
}

export default App
