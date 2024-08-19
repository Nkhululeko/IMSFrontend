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
    const {
        part_name,
        part_number,
        quantity,
        price,
        supplier,
        supplier_id,
        category_id
    } = req.body;

    // Basic validation
    if (!part_name || !part_number || !quantity || !price || !supplier || !supplier_id || !category_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert into the database
    db.query(
        'INSERT INTO inventory (part_name, part_number, quantity, price, supplier, supplier_id, category_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
        [part_name, part_number, quantity, price, supplier, supplier_id, category_id],
        (err, results) => {
            if (err) {
                console.error('Error inserting data:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.status(201).json({ id: results.insertId });
        }
    );
});

app.put('/api/inventory/:id', (req, res) => {
    const id = req.params.id;
    const { part_name, part_number, quantity, price, supplier, supplier_id, category_id } = req.body;

    // Basic validation
    if (!part_name || !part_number || !quantity || !price || !supplier || !supplier_id || !category_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.query(
        'UPDATE inventory SET part_name = ?, part_number = ?, quantity = ?, price = ?, supplier = ?, supplier_id = ?, category_id = ?, updated_at = NOW() WHERE id = ?',
        [part_name, part_number, quantity, price, supplier, supplier_id, category_id, id],
        (err, results) => {
            if (err) {
                console.error('Error updating data:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Inventory item not found' });
            }

            res.json({ message: 'Inventory item updated successfully' });
        }
    );
});

app.delete('/api/inventory/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM inventory WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }

        res.json({ message: 'Inventory item deleted successfully' });
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
