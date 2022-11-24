import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

const NewHero = ({onSubmit}) => {
    const [heroe, setHeroe] = useState({
        Apodo: "",
        Nombre: "",
        Edad: "",
        Imagen: "",
        Genero: "",
        Especie: "",
        FechaNacimiento: ""
    });

    const handleChange = (e) => {
        setHeroe({
            ...heroe,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <h1>New Hero</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Apodo</Form.Label>
                    <Form.Control 
                        name="Apodo" 
                        type="text" 
                        placeholder="Apodo del Heroe"
                        value={heroe.apodo}
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        name="Nombre" 
                        type="text" 
                        placeholder="Nombre del Heroe"
                        value={heroe.nombre}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Edad</Form.Label>
                    <Form.Control 
                        name="Edad" 
                        type="number" 
                        placeholder="Edad del Heroe" 
                        value={heroe.edad}
                        onChange={handleChange} />
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control 
                        name="Imagen" 
                        type="text" 
                        placeholder="Imagen del Heroe"
                        value={heroe.imagen}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Genero</Form.Label>
                    <Form.Control 
                        name="Genero" 
                        type="text" 
                        placeholder="Genero del Heroe"
                        value={heroe.genero}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Especie</Form.Label>
                    <Form.Control 
                        name="Especie" 
                        type="text" 
                        placeholder="Especie del Heroe" 
                        value={heroe.especie}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control 
                        name="FechaNacimiento" 
                        type="text" 
                        placeholder="Fecha de Nacimiento del Heroe"
                        value={heroe.fechaNacimiento}
                        onChange={handleChange} />
                    <Form.Text className="text-muted">
                        Escribir en formato DD/MM/AAAA
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="button" onClick={() => onSubmit(heroe)}>
                    Crear
                </Button>
            </Form>
        </div>
    )
}

export default NewHero;