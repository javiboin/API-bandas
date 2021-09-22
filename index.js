require('dotenv').config();
/* const { urlencoded } = require('body-parser'); */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3028;

app.use(express.urlencoded({ extended: true } ));
app.use(express.json());

const bandasRoutes = require('./routes/bandas.routes');

app.use('/api/v1/bandas', bandasRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});