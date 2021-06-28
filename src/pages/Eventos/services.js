import api from "../../services/api";

export const getEventos = (data_inicio, data_fim, setEventos) => {
  api.get("/eventos/", {
    params: {
      "data_inicio": data_inicio,
      "data_fim": data_fim
    }
  })
    .then((result) => {
      let eventosCalendar = []
      result.data.resultados.map((evento) => {
        evento.data_inicio = new Date(evento.data_inicio)
        evento.data_fim = new Date(evento.data_fim)
        evento.start = evento.data_inicio
        evento.end = evento.data_fim
        evento.title = evento.nome
        evento.id = evento.eventosID
        eventosCalendar.push(evento.data_inicio)
      })
      setEventos(result.data.resultados)
    })
    .catch((error) => {
      console.log(error);
      return []
    });
};
