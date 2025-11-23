const express = require("express");
const path = require("path");

const homeRoutes = require("./routes/homeRoutes");
const lembretesRoutes = require("./routes/lembretesRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ---------------------------------------------------------------------------
    Pasta pública (ficheiros estáticos)
--------------------------------------------------------------------------- */
app.use(express.static(path.join(__dirname, "..", "public")));

/* ---------------------------------------------------------------------------
    Middleware para processar formulários (req.body)
--------------------------------------------------------------------------- */
app.use(express.urlencoded({ extended: true }));

// ROTAS
app.use("/", homeRoutes);
app.use("/lembretes", lembretesRoutes);

// Se o user usar uma rota desconhecida
app.use((req, res) => {
  res.status(404).render("404", { tituloPagina: "Página não encontrada!" });
});

module.exports = app;
