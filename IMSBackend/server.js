const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nkhulu22',
  database: 'car_parts_business_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/inventory', (req, res) => {
  db.query('SELECT * FROM inventory', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/inventory', (req, res) => {
  const { name, quantity, price } = req.body;
  db.query('INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)', [name, quantity, price], (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId });
  });
});

app.put('/api/inventory/:id', (req, res) => {
  const id = req.params.id;
  const { name, quantity, price } = req.body;
  db.query('UPDATE inventory SET name = ?, quantity = ?, price = ? WHERE id = ?', [name, quantity, price, id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete('/api/inventory/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM inventory WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// User management routes
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
