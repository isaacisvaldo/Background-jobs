import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import {routes} from './router'

const port = process.env.PORT || 3000;
config();
const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(routes);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.listen(port, () => console.log(`http://localhost:${port}`));
};
main();