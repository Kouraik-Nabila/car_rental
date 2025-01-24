const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'car_rental'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

// Route d'inscription
app.post('/register', (req, res) => {
    const { username, email, password, role } = req.body;
    const sql = `INSERT INTO users (username, email, password, role) VALUES ('${username}', '${email}', '${password}', '${role}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('login.html');
    });
});

// Route de connexion
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            req.session.user = result[0];
            res.redirect('dashboard.html');
        } else {
            res.send('Invalid credentials!');
        }
    });
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
