const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json({ limit:'10MB' }));
app.use(express.urlencoded({ extended: true, limit: '10MB' }));

app.get('/', (req, res) => {
    console.log("In base route");
    res.status(200).json("You're in base route");
})

app.post('/user/registration', (req, res) => {
    console.log(req.body);
    res.status(200).json("Signup Data received");
})

app.post('/user/login', (req, res) => {
    console.log(req.body);
    res.status(200).json("User Data Received")
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})