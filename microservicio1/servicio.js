const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3001;

app.use(cors()); // Habilita CORS

app.get('/', (req, res) => {
    const db = [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
        },
        {
            id: 2,
            firstname: 'Melina',
            lastname: 'Lopez',
        }
    ]

    res.send(db);
});

app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
