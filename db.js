const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '3307',
    user: process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || 'root1234',
    database: process.env.DB_NAME || 'evaluation',
    dateStrings: true, // ให้วันที่ออกเป็นข้อความ
});

async function query(sql, values = []) {
    const [rows] = await pool.query(sql, values);
    return rows;   
}

module.exports = { pool, query};