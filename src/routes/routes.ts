import { adminLogin } from "@/app/api/admin/login";
import { adminRegeister } from "@/app/api/admin/register";
import { signUp } from "@/controllers/user/userAuthControllsers";
import express from "express";
import next from "next";
import bodyParser from "body-parser";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  // Middleware to parse JSON bodies
  server.use(bodyParser.json());
  server.post("/api/sign-up", signUp);
  server.post("/api/admin/login", adminLogin);
  server.post("/api/admin/register", adminRegeister);

  server.use("/api/users/login");
});
