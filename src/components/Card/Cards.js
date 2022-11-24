import React, {useState} from "react";
import {Card, Button} from "react-bootstrap";
//import './Cards.css';
import Modals from '../Modals';;

const Cards = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.heroe.Imagen} />
            <Card.Body>
                <Card.Title>{props.heroe.Apodo}</Card.Title>
                <Card.Text>
                    {props.heroe.Nombre}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>Detalles</Button>
                <Modals
                    show={show} 
                    modalClose={handleClose}
                    heroe = {props.heroe}
                    ></Modals>
            </Card.Body>
        </Card>
    );
}

export default Cards;