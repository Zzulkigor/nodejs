import express from "express"
import path from "path"
import connection from "../db.js"
import { error } from "console"

const router = express.Router()

router.post("/api/add-user", (req, res) =>{
    const {name, email} = req.body;

    connection.query("INSERT INTO users (name, email) VALUES (?,?)",
     [name, email],
     (err, result) =>{
        if(err) return res.json({message: "Ошибка: " + err.message})

        res.json({message: "Пользователь добавлен"})
     }
    )
})

router.get("/about", (req, res) =>{
    res.sendFile(path.resolve("public/about.html"))
})

router.get("/contacts", (req, res) => { 
    res.sendFile(path.resolve("public/contacts.html")); 
});

export default router;