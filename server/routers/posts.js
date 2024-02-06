import express from "express";
import { getPosts } from '../controller/posts.js'

const app = express();

app.get('/', getPosts)

export default app;