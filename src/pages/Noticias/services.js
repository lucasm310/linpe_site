import api from "../../services/api";

export const getNoticas = (SetNoticias) => {
  api.get("/noticias/", {})
    .then((result) => {
      result.data.resultados.map((noticia) => {
        noticia.data_cadastro = new Date(noticia.data_cadastro)
      })
      SetNoticias(result.data.resultados)
    })
    .catch((error) => {
      console.log(error);
    });
}

export const getNotica = (noticiaID, setNoticia) => {
  api.get(`/noticias/${noticiaID}`, {})
    .then((result) => {
      setNoticia(result.data.resultados[0])
    })
    .catch((error) => {
      console.log(error);
    });
}
