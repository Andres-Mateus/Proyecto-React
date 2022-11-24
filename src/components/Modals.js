import React from "react";
import {Modal, Button} from "react-bootstrap";

const Modals = (props) => {
    return(
        <Modal show={props.show} onHide={props.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heroe.Apodo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                <b>Apodo:</b> {props.heroe.Apodo}.<br />
                <b>Nombre:</b> {props.heroe.Nombre}.<br />
                <b>Edad:</b> {props.heroe.Edad}.<br />
                <b>Genero:</b> {props.heroe.Genero}.<br />
                <b>Especie:</b> {props.heroe.Especie}.<br />
                <b>Fecha de Nacimiento:</b> {props.heroe.FechaNacimiento}.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.modalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modals;