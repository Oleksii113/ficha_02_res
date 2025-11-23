/**
tituloPagina
mensagem -> Texto 
stats.total
stats.proximaData
stats.proximos7
stats.atrasados

*/
const lembretes = require("../data/lembretes");

/**
 * Calcula estatísticas base (total, atrasados, próximos 7 dias e próxima data)
 * sobre a lista de lembretes.
 * @param {{ id:number, titulo:string, data:string, descricao:string }[]} lista Lista de lembretes com datas no formato YYYY-MM-DD.
 * @returns {{ total:number, atrasados:number, proximos7:number, proximaData:(string|null) }} Objeto agregado para o dashboard.
 */

function calcularEstatisticas(lista) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const msPorDia = 24 * 60 * 60 * 1000;
  const daquiA7 = new Date(hoje.getTime() + 7 * msPorDia);

  let atrasados = 0;
  let proximos7 = 0;
  const futurasOuHoje = [];

  for (const l of lista) {
    const data = new Date(l.data);
    data.setHours(0, 0, 0, 0);

    if (data < hoje) {
      atrasados++;
    } else {
      futurasOuHoje.push(data);
      if (data <= daquiA7) proximos7++;
    }
  }

  // Ordena as datas futuras ou de hoje para encontrar a próxima
  // A próxima data é a menor data >= hoje

  futurasOuHoje.sort((a, b) => a - b);
  const proximaData =
    futurasOuHoje.length > 0
      ? futurasOuHoje[0].toISOString().slice(0, 10)
      : null;

  return {
    total: lista.length,
    atrasados,
    proximos7,
    proximaData,
  };
}

/**
 * Controlador da home: agrega estatísticas e renderiza a vista "home".
 * @param req Pedido HTTP.
 * @param res Resposta HTTP (usa res.render).
 * @returns {void}
 */

function mostrarHome(req, res) {
  const stats = calcularEstatisticas(lembretes);

  const mensagem = "Bem-vindo à maravilhosa página de lembretes!";
  const tituloPagina = "Agenda de Estudos";
  res.render("home", {
    tituloPagina: "Agenda de Estudos",
    mensagem,
    stats,
  });
}

module.exports = { mostrarHome };
