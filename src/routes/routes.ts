import { signUp } from "@/controllers/user/userAuthControllsers";
import express from "express";

const app = express();

app.post("/api/sign-up", signUp);
