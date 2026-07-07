const express = require('express');
const ApiError = require('./app/api-error');
const app = express();
const cors = require('cors');
const contactRoutes = require('./app/routes/contact.route');
//handle 404 error
app.use((req, res, next) => {
    // code o day se chay khi khong co route duoc dinh nghia nao
    // khop voi yeu cau goi next() de chuyen sang middleware xu ly loi
    return next(new ApiError(404, 'Resource not found'));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    //middleware xu ly loi tap trung
    return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});
app.use(cors());
app.use(express.json());
app.get ('/', (req, res) => {
    res.json({ message: 'Welcome to the ContactBook application.' });
});
app.use('/api/contacts', contactRoutes);
module.exports = app;