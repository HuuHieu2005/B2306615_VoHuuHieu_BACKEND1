const express = require('express');
const app = express();
const cors = require('cors');
const contactRoutes = require('./app/routes/contact.route');
app.use(cors());
app.use(express.json());
app.get ('/', (req, res) => {
    res.json({ message: 'Welcome to the ContactBook application.' });
});
app.use('/api/contacts', contactRoutes);
module.exports = app;