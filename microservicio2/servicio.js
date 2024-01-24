const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002;

app.use(cors()); // Habilita CORS

app.get('/', (req, res) => {
    const db = [
        {
            id: 1,
            firstname: 'Mateo',
            lastname: 'Condor',
        },
        {
            id: 2,
            firstname: 'Karol',
            lastname: 'Macas',
        },
        {
            id: 3,
            firstname: 'Luis',
            lastname: 'Burbano',
        }
    ]

    res.send(db);
});

app.listen(puerto, () => {
    console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});
