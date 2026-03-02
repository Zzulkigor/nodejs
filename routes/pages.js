import express from "express"
import path from "path"
import connection from "../db.js"

const router = express.Router()

router.get("/", (req, res) =>{
    connection.query("SELECT * FROM books", (err, rows) =>{
        if(err) return res.send("Ошибка", err.message)
        res.render("index", {books: rows})
    })
})

router.get("/about", (req, res) =>{
    res.sendFile(path.resolve("public/about.html"))
})

router.get("/contacts", (req, res) => { 
    res.sendFile(path.resolve("public/contacts.html")); 
});

export default router;