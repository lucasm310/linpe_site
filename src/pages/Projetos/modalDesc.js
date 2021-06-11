import React from "react";

import { Modal, Button } from "react-bootstrap";

function Descomplicando(props) {
  const { onClose, open } = props;
  return (
    <Modal
      show={open}
      onHide={onClose}
      size="lg"
      aria-labelledby="modal_Descomplicando"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal_Descomplicando">Descomplicando</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Descomplicando;
