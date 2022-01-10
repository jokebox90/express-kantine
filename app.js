const fs = require('fs')
const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

const port = 8888
const description = 'Kantine De Pasta'

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('accueil.html', {
    title: `${description} // Accueil`
  });
});

app.get('/boissons', (req, res) => {
  res.render('boissons.html', {
    title: `${description} // Boissons`
  });
});

app.get('/contact', (req, res) => {
  res.render('contact.html', {
    title: `${description} // Contact`
  });
});

app.get('/reservation', (req, res) => {
  res.render('reservation.html', {
    title: `${description} // Réservation`
  });
});

app.listen(port, () => {
  console.log(`"Kantine De Pasta" started at http://localhost:${port}`)
})
