require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const port = 3000;
const mongoose = require('mongoose');
const Vegetables = require('./models/vegetables');

app.use(methodOverride('_method'));
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

mongoose.set('strictQuery', true);
const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Welcome to My Vegetable Store!');
});

app.get('/vegetables', (req, res) => {
  Vegetables.find({}, (err, vegetableList) => {
    res.render('Index', { vegetables: vegetableList });
  });
});

app.get('/vegetables/new', (req, res) => {
  res.render('New');
});

app.delete('/vegetables/:id', (req, res) => {
  Vegetables.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/vegetables'); //redirect back to vegetables index
  });
});

app.put('/vegetables/:id', (req, res) => {
  Vegetables.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, updatedVegetables) => {
      console.log(updatedVegetables);
      res.redirect(`/vegetables/${req.params.id}`); // redirecting to the Show page
    }
  );
});

app.post('/vegetables', (req, res) => {
  Vegetables.create(req.body, (err, createdVegetables) => {
    res.redirect('/vegetables');
  });
});

app.get('/vegetables/:id/edit', (req, res) => {
  Vegetables.findById(req.params.id, (err, foundVegetables) => {
    //find the vegetables
    if (!err) {
      res.render('Edit', {
        vegetables: foundVegetables, //pass in the found vegetables so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

app.get('/vegetables/:id', (req, res) => {
  Vegetables.findById(req.params.id, (err, foundVegetables) => {
    res.render('Show', { vegetables: foundVegetables });
  });
});

app.listen(port, function () {
  console.log(`listening on port ${port}...`);
});
