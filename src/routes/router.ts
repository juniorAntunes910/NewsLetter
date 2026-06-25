import express from "express";
const { newsletter } = require("../controllers/aiController")



const router = express.Router();


router.post("/newsletter", (req, res) => newsletter(req, res));


export { router }