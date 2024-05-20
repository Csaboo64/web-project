import path from "path";
import express from "express";
import mysql from 'mysql2';
import cors from "cors";
import bodyParser from 'body-parser';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
let jsonParser = bodyParser.json();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project',
}).promise();   

app.use(cors());

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../web-project/frontend/index.html'))
});

app.get('/sorsjegyek/:id', async (req,res)=>{
    let sorsjegyId = parseInt(req.params.id);
    const [rows, fields] = await db.query('SELECT id, nev, ar, fonyeremeny, nyeresi_esely, kaphato FROM sorsjegy WHERE id = ?', [sorsjegyId ]);
    if (rows.length == 1){
        res.send(rows[0]);
    } 
    else {
        res.status(404).send({error: 'Nincs ilyen felhasználó!'});
    }
});
app.post('/sorsjegyek', jsonParser, async (req,res)=>{
    //console.log(req.body);
    //console.log("A JSON-ben kapott felhasználónév: " + req.body.teljesneve);
    //res.send(req.body);
    const [rows, fields] = await db.query('SELECT id, nev, ar, fonyeremeny, nyeresi_esely, kaphato FROM sorsjegy');
    let sorsjegyAdatai = [rows.length, req.body.nev, req.body.ar, req.body.fonyeremeny, req.body.nyeresi_esely, req.body.kaphato];
    const insert = await db.query(`INSERT INTO sorsjegy(id, nev, ar, fonyeremeny, nyeresi_esely, kaphato) VALUES (?,?,?,?,?,?)`,sorsjegyAdatai);
    res.send("Sikeres a sorsjegy felvétele");
});

app.listen(3000);