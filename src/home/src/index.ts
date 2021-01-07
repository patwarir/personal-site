import express from "express";
import helmet from "helmet";

const app = express();

app.set("trust proxy", true);

app.use(helmet());

app.use(express.static("public"));

app.listen(3000, () => console.log("Server started..."));
