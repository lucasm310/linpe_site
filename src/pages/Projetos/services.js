import api from "../../services/api";

export const getDocumentos = (setDocumentos) => {
  api
    .get("/documentos/", {
      params: {
        tipo: "publico",
      },
    })
    .then((result) => {
      setDocumentos(result.data.resultados);
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const getDocumentoUrl = async (id) => {
  return api.get(`/documentos/${id}`, {})
    .then((result) => {
      return result.data.resultados[0].url;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getConteudo = (id) => {
  api
    .get(`/documentos/${id}`, {})
    .then((result) => {
      var link = document.createElement("a");
      link.href = result.data.resultados[0].url;
      link.download = result.data.resultados[0].nome_file;
      document.body.appendChild(link);
      link.click();
      setTimeout(function () {
        window.URL.revokeObjectURL(link);
      }, 200);
    })
    .catch((error) => {
      console.log(error);
    });
};
