const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({message:'Hello from solomon', app:'NodeMon'});
// });

// app.post('/', (req, res) => {
//   res.status(200).send('you can post to this endpoint');
// });

const tours = JSON.parse(fs.readFileSync(`./after-section-06/dev-data/data/tours-simple.json`));

app.get('api/v1/tours', (req, res) => {
  res.status(200).json({
    status : 'success',
    data: {
      tours : tours
    }
  });
})

// POST

app.post('api/v1/tours', (req, res) => {
  console.log(res.body);
  res.send('App is Done');
})

const port = 3000;

app.listen(port ,'127.0.0.1', () => {
  console.log('listening 3000..');
});

