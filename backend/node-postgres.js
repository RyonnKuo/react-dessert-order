const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

// 中介軟體
app.use(cors());
app.use(express.json());

// PostgreSQL 連接池設定
const pool = new Pool({
    user: 'xxxx',          // 你的 PostgreSQL 帳號
    host: 'xxxx',         // 資料庫主機
    database: 'xxxx',  // 資料庫名稱
    password: 'xxxx',      // 你的密碼
    port: xxxx,                // PostgreSQL 預設埠號
});

// API: 獲取購物車內容
app.get('/shopping-cart', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM SHOPPINGCART');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// API: 新增購物車項目
app.post('/shopping-cart', async (req, res) => {
    const { quantity, dessertID } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO SHOPPINGCART (QUANTITY, DESSERTNUMBER) VALUES ($1, $2) RETURNING *',
            [quantity, dessertID]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
