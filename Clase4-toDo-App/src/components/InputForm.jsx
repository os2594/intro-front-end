import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap"

const InputForm = ({labelTitle, buttonLabel, placeholder, funcion}) => {

const [texto, setTexto] = useState('');

// const handleInput = (e) => {
//     setTexto(e.target.value)
// }

function handleInput(e) {
    setTexto(e.target.value)
    console.log(e.target.value)
}


  return (
    <>  
        <Col>
            <Form onSubmit={(e) => funcion(e)}>
                <Form.Group>
                    <Form.Label>{labelTitle}</Form.Label>
                    {/* <Form.Label>{texto}</Form.Label> */}
                    <Form.Control 
                        type="text" 
                        placeholder={placeholder}
                        value = {texto}
                        onChange={(e) => handleInput(e)}
                        >
                        </Form.Control>
                    {/* <Button variant='success' className="btn btn-primary mt-2" onClick={() => setTexto('Texto actualizado')}>
                            {buttonLabel}
                    </Button> */}

                    <button type="submit" className="btn btn-primary mt-2">{buttonLabel}</button>
                </Form.Group>
            </Form>
        </Col>
    </>
  )
}

export default InputForm
