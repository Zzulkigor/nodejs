import express from "express"
import path from "path"
import connection from "../db.js"
import { error } from "console"

const router = express.Router()

router.get("/api/books", (req, res) =>{
    connection.query("SELECT * FROM books", (err, rows) =>{
        if(err) return res.json({error: err.message})
        res.json(rows)
    })
})

router.get("/about", (req, res) =>{
    res.sendFile(path.resolve("public/about.html"))
})

router.get("/contacts", (req, res) => { 
    res.sendFile(path.resolve("public/contacts.html")); 
});

export default router;