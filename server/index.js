const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const usersRouter = require('./routes/Users');
app.use('/user', usersRouter);
const shopsRouter = require('./routes/Shops');
app.use('/shop', shopsRouter);
const ContactRouter = require('./routes/Contact');
app.use('/contactus', ContactRouter);
const AdsRouter = require('./routes/ShopItems');
app.use('/ads', AdsRouter);
const CartRouter = require('./routes/AddToCart');
app.use('/cart', CartRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server Running on Port 3001');
  });
});
