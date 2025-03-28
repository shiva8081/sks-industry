import { createServer } from "./index";
import dotenv from "dotenv";

dotenv.config();

const app = createServer();

const port = process.env.PORT;
console.log("PORT from .env:", process.env.PORT);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
