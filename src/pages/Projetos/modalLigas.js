import React from "react";
import { Modal, Button, Col, Row, Image } from "react-bootstrap";
import logo_lacec from "../../assets/lacec_uftm.jpg";
import logo_lacec_unit from "../../assets/lacec_unit.jpg";
import logo_lamce from "../../assets/lamce.jpg";
import logo_unefan from "../../assets/lapex_unefan.jpg";
import logo_liapex from "../../assets/liapex.jpg";
import logo_unicid from "../../assets/unicid.jpg";
import logo_lacce from "../../assets/lacce.jpg";


const ligas_info = [
  {
    name: "LAPEX",
    org: "UNEFAN",
    logo: logo_unefan,
    url: "https://www.instagram.com/lapex.liga/",
  },
  {
    name: "UNICID",
    org: "UNICID",
    logo: logo_unicid,
    url: "https://www.instagram.com/ligacec.unicid/",
  },
  {
    name: "LACEC",
    org: "UFTM",
    logo: logo_lacec,
    url: "https://www.instagram.com/lacecuftm/",
  },
  {
    name: "LIAPEX",
    org: "USF",
    logo: logo_liapex,
    url: "https://www.instagram.com/liapexusf/",
  },
  {
    name: "LACEC",
    org: "UNIT",
    logo: logo_lacec_unit,
    url: "https://www.instagram.com/lacec_/",
  },
  {
    name: "LAMCE",
    org: "UFPI",
    logo: logo_lamce,
    url: "https://www.instagram.com/lamceufpi/",
  },
  {
    name: "LACCE",
    org: "UNIFESP",
    logo: logo_lacce,
    url: "https://www.instagram.com/lacce.unifesp/",
  },
];

function Ligas(props) {
  const { onClose, open } = props;
  return (
    <Modal
      show={open}
      onHide={onClose}
      size="lg"
      aria-labelledby="modal_Ligas"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal_Ligas">Ligas Acadêmicas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {ligas_info.map((liga, idx) => (
            <Col
              key={idx}
              md={3}
              className="d-flex justify-content-center mb-5"
            >
              <Image
                src={liga.logo}
                roundedCircle
                className="click"
                onClick={() => window.open(liga.url, "_blank")}
              />
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ligas;
