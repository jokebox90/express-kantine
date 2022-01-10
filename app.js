const fs = require('fs')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const port = 8888
const description = 'Kantine De Pasta'

const hbs = exphbs.create({
  defaultLayout: 'base',
  extname: '.hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('accueil', {
    title: `${description} // Accueil`
  });
});

app.get('/boissons', (req, res) => {
  res.render('boissons', {
    title: `${description} // Boissons`
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: `${description} // Contact`
  });
});

app.get('/reservation', (req, res) => {
  res.render('reservation', {
    title: `${description} // Réservation`
  });
});

app.listen(port, () => {
  console.log(`"Kantine De Pasta" started at http://localhost:${port}`)
})
