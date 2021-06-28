import React, { useEffect, useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { getDocumentos, getConteudo } from "./services";

function Descomplicando(props) {
  const [documents, setDocumentos] = useState([]);
  const { onClose, open } = props;
  const handlerDownload = (id) => {
    getConteudo(id);
  };
  useEffect(() => {
    if (open) {
      getDocumentos(setDocumentos);
    }
  }, [open]);
  return (
    <Modal
      show={open}
      onHide={onClose}
      size="lg"
      aria-labelledby="modal_Descomplicando"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal_Descomplicando">
          Descomplicando a Perfusão
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {documents.map((document, idx) => (
            <ListGroup.Item key={idx}>
              <div className="d-flex">
                <div className="p-2">{document.nome}</div>
                <div className="ml-auto p-2">
                  <Button
                    onClick={() => {
                      handlerDownload(document.documentoID);
                    }}
                  >
                    Baixar
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Descomplicando;
