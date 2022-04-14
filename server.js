const express = require('express');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.listen(8080 || process.env.PORT, function () {
 console.log('Server is running:');
});