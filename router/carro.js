import express from "express"
import ControllerCarro from "../controller/carro.js"
const router = express.router()

router.get("buscar",ControllerCarro.Buscar)
router.get("detalhe/:id",ControllerCarro.Detalhe)
router.post("criar",ControllerCarro.Criar)
router.put("alterar",ControllerCarro.Alterar)
router.delete("deletar",ControllerCarro.Buscar)
export default router


