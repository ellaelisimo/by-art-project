import express from "express";
import mysql from "mysql2/promise";
import { MYSQL_CONFIG } from "./config.js";

const router = express.Router();

router.get("/health", async (req, res) => {
  try {
    await mysql.createConnection(MYSQL_CONFIG);

    res.send({ database: "ok" }).end();
  } catch (error) {
    res.status(500).send(console.error({ error })).end();
  }
});

export default router;
