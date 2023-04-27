import express from "express";
const app = express();
const router = express.Router();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
