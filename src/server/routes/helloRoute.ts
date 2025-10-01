import express from "express";

import helloRoute from "../controllers/helloRoute";

const router = express.Router();

router.get("/test", helloRoute);

export default router;
