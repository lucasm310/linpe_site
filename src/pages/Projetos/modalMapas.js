import React, { useEffect, useState } from "react";
import { Modal, Button, ListGroup, Carousel } from "react-bootstrap";
import { getDocumentos, getDocumentoUrl } from "./services";

function Mapas(props) {
  const [documents, setDocumentos] = useState([]);
  const { onClose, open } = props;
  const filterDocumentos = (documentos) => {
    documentos
      .filter((doc) => doc.categoria === "mapa_mental")
      .map((document, idx) => {
        getDocumentoUrl(document.documentoID).then((url) => {
          document.url = url;
          setDocumentos((documents) => [...documents, document]);
        });
      });
  };

  useEffect(() => {
    if (open) {
      setDocumentos([]);
      getDocumentos(filterDocumentos);
    }
  }, [open]);

  return (
    <Modal
      show={open}
      onHide={onClose}
      size="lg"
      aria-labelledby="modal_Mapas"
      centered
    >
      <Modal.Body>
        <Carousel className="custom_carousel">
          {documents.map((document, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 h-50"
                src={document.url}
                alt={document.nome}
              />
              <Carousel.Caption>
                <h5>{document.nome}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Mapas;
