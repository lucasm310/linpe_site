import React from "react";

import { Modal, Button } from "react-bootstrap";

function Evento(props) {
  const { onClose, open, evento } = props;
  return (
    <Modal
      show={open}
      onHide={onClose}
      size="lg"
      aria-labelledby="modal_evento"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal_evento">{evento.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>
          <b>Descrição:</b> <p>{evento.descricao}</p>
        </span>
        <span>
          <b>Data Inicio:</b> <p>{evento.data_inicio.toLocaleString("default")}</p>
        </span>
        <span>
          <b>Data Fim:</b> <p>{evento.data_fim.toLocaleString("default")}</p>
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Evento;
