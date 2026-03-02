import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mysite"
});

connection.connect(function(err){
    if(err){
        return console.log("Ошибка: " + err.message)
    } else{
        console.log("Успешное подключение")
    }
})

export default connection