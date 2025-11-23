const express = require("express");
const router = express.Router();
const lembretesController = require("../controllers/lembretesController");

router.get("/novo/form", lembretesController.mostrarFormularioNovo);

router.get("/", lembretesController.listarLembretes);

router.get("/:id", lembretesController.detalheLembrete);

router.post("/", lembretesController.criarLembrete);
router.post("/:id/apagar", lembretesController.apagarLembrete);

module.exports = router;
