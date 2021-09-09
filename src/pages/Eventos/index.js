import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { getEventos } from "./services";
import Evento from "./evento";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [data_inicio, setDataInicio] = useState();
  const [data_fim, setDataFim] = useState();
  const [showModal, setShowModal] = useState(false);
  const [evento, setEvento] = useState({
    nome: "",
    data_inicio: new Date(),
    data_fim: new Date(),
    descricao: "",
  });

  const handlerCloseModal = () => {
    setShowModal(false);
  };

  const handlerOpenModal = (id) => {
    eventos.map((e) => {
      if (e.eventosID === id) {
        setEvento(e);
        setShowModal(true);
      }
    });
  };

  const handlerChange = (data) => {
    setDataInicio(data.start);
    setDataFim(data.end);
  };

  useEffect(() => {
    let date = new Date();
    setDataInicio(new Date(date.getFullYear(), date.getMonth(), 1));
    setDataFim(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  }, []);

  useEffect(() => {
    if (data_inicio && data_fim) {
      getEventos(data_inicio, data_fim, setEventos);
    }
  }, [data_inicio, data_fim]);

  return (
    <section id="eventos" className="sections">
      <Row className="no-gutters">
        <Col className="sections-titulos">
          <h1>EVENTOS</h1>
        </Col>
      </Row>
      <Row className="eventos-calendar no-gutters">
        <Col md={5} xs={12}>
          <FullCalendar
            height={500}
            locale="pt-br"
            plugins={[dayGridPlugin, bootstrapPlugin]}
            initialView="dayGridMonth"
            events={eventos}
            datesSet={(e) => {
              handlerChange(e);
            }}
            eventClick={(data) => {
              handlerOpenModal(data.event.id);
            }}
          />
        </Col>
        <Col md={5} xs={12}>
          <ListGroup className="lista-novidades float-right">
            {eventos.map((evento) => (
              <ListGroup.Item
                key={evento.id}
                action
                onClick={() => {
                  handlerOpenModal(evento.id);
                }}
              >
                <Row className="align-items-center">
                  <Col md={3}>
                    <span className="texto-data">
                      {evento.data_inicio.getDate()}{" "}
                      {evento.data_inicio
                        .toLocaleString("default", { month: "short" })
                        .toUpperCase()}
                    </span>
                  </Col>
                  <Col md={9}>
                    <span className="texto-titulo mb-5">{evento.nome}</span>
                    <br />
                    <span className="texto-descri text-justify">
                      {evento.descricao !== null &&
                        evento.descricao.slice(0, 100)}
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Evento onClose={handlerCloseModal} open={showModal} evento={evento} />
    </section>
  );
}

export default Eventos;
