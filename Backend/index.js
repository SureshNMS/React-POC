const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json({ limit:'20MB' }));
app.use(express.urlencoded({ extended: true, limit: '10MB' }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nmaynotbe@123*',
    database: 'courseManagement'
})

db.connect((err) => {
    if(err) {
        console.error("Error connection to the database", err);
        return;
    }
    console.log("Connected to Database");
})

app.get('/', (req, res) => {
    console.log("In base route");
    res.status(200).json("You're in base route");
})

app.post('/user/registration', async (req, res) => {
    let {name, role, email, password} = req.body;
    let hasedPassword = await bcrypt.hash(password, 10);
    result = db.query(`insert into Users (name, role, email, password)values('${name}','${role}','${email}','${hasedPassword}')`,
        (error) => {
            if(error) {
                console.log(error); 
                return res.status(500).json("Something went wrong with Signup connection");
            }
            else return res.status(200).json("Signup Successfully.");
        })
    
})

app.post('/user/login', (req, res) => {
    const {email, password} = req.body;
    
    if (!email || !password) {
        return res.status(400).json("Email and Password are required");
    }

    db.query(`SELECT * FROM Users where email = ?`, [email], async (err, results) => {
        if(err) {
            console.log(err);
            return res.status(500).json("Something went wrong with Login connection")
        }
        else if(results.length === 0) {
            return res.status(404).json("User not found");
        }
        
        const passwordFromDb = results[0].Password;      
        const isMatchedPassword = await bcrypt.compare(password, passwordFromDb)

        if(!isMatchedPassword) {
            return res.status(401).json("Invalid credentials");
        }
        return res.status(200).json("Login successful");        
    });
})

app.get('/course/allcourses', (req, res) => {
    console.log("Fetching all courses");
    res.status(200).json("All Courses []")
})

app.get('/coursedetails/category/:category', (req, res) => {
    console.log(req.params);
    res.status(200).json(req.params);
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})