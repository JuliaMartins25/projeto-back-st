import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import characterRouter from "./characterRoutes.js";
import eastereggRouter from "./eastereggRoutes.js";


const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/characters", characterRouter )
router.use("/easteregg", eastereggRouter )


export default router;
