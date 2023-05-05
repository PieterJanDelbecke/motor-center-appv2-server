import express from "express";
const app = express();
import testRouter from "./routes/testRoutes.js";

const PORT = 5000;

app.use("/test", testRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
