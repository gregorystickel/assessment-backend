const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require(`./controller`)
const { deleteRandomFortune } = require(`./controller`)
const { addFortune } = require(`./controller`)
const { getAllFortune } = require(`./controller`)

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.delete("/api/fortune", deleteRandomFortune);

app.post("/api/fortune", addFortune);

app.get("/api/fortunes", getAllFortune);

app.listen(4000, () => console.log("Server running on 4000"));
