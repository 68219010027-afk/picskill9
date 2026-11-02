const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

/*app.get('/api/user', (req, res) => {
    let user = {
        fristname: 'test',
        lastname: 'asdwas',
        age: 21
    }
    res.json(user)
}) */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('API พร้อมที่ http://localhost:' + PORT));