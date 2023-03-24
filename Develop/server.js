const express = require('express');
const path = require ('path');
const fs = require ('fs');

const port = process.env.PORT || 3001;

const app = express ();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, 'public/notes.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
})

app.listen(PORT, () =>
    console.log('App listening at ${PORT}')
);