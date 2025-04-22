const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const puerto = 3000;

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/clientes';

app.get('/clientes', async (req, res) => {
    const cliente = new MongoClient(url);
    await cliente.connect();
    const db = cliente.db();
    const clientes = await db.collection('clientes').find().toArray();
    await cliente.close();
    res.json(clientes);
});

app.listen(puerto, () => {
    console.log(`API escuchando en http://localhost:${puerto}`);
});