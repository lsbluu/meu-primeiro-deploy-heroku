const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h1>EEExecutando na porta ${PORT}</h1>`));
app.listen(PORT, () => console.log(`RRRodando na porta ${PORT}`));
