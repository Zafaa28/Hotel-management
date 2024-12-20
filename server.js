const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let guests = [];
let rooms = [];
let reservations = [];

// Add guest endpoint
app.post('/add-guest', (req, res) => {
    const guest = req.body;
    guests.push(guest);
    res.send('Guest added successfully!');
});

// Get guests endpoint
app.get('/guests', (req, res) => {
    res.json(guests);
});

// Add room endpoint
app.post('/add-room', (req, res) => {
    const room = req.body;
    rooms.push(room);
    res.send('Room added successfully!');
});

// Get rooms endpoint
app.get('/rooms', (req, res) => {
    res.json(rooms);
});

// Book reservation endpoint
app.post('/book-reservation', (req, res) => {
    const reservation = req.body;
    reservations.push(reservation);
    res.send('Reservation booked successfully!');
});

// Get reservations endpoint
app.get('/reservations', (req, res) => {
    res.json(reservations);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
