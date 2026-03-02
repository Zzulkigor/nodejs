import express from "express";
import cors from "cors";
import pagesRouter from "./routes/pages.js"

const app = express()
app.use(cors()) // пакет для отработки fetch
app.use(express.json())
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");


app.use("/", pagesRouter)

app.listen(3000, () =>{
    console.log("Сервер запущен по адресу: http://localhost:3000")
})