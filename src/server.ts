import express from "express";
import morgan from "morgan";
import { protect } from "./modules/auth";
import router from "./router";
import { createNewUser, signin } from "./handlers/user";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.get("/todo/:id", myMiddleware, my2ndMiddleware, handler);
app.get("/", (req, res) => {
  throw new Error("oops");
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);
// app.listen(port, () => {
//   console.log(process.argv);
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

export default app;
