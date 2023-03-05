const express = require('express');
const router = express.Router();
const axios = require('axios');

// 	Parameter type is 't' = Movie title to search for.
// router.get('/:t', (req,res) => {
//     const searchTerms  = req.params.t;
//     console.log('searchTerms', searchTerms);
//     axios.get(`http://www.omdbapi.com/?t=${searchTerms}&apikey=${process.env.OMDb_API_KEY}`
//     )
//     .then ((response) => {
//         console.log('response', response );
//         // console.log('response.data', response.data );
//         res.send(response.data);
//     })
//     .catch((error) => {
//         console.log('ERROR IN OMDb API GET', error); 
//     });
// })


router.get('/:t', (req, res) => {
    const searchTerms = req.params.t;
    axios.get(`http://www.omdbapi.com/?t=${searchTerms}&apikey=${process.env.OMDb_API_KEY}`)
      .then((response) => {
        if (response.data.Error) { // check if the response contains an error message
          res.status(404).send({ error: 'Movie not found' }); // send a custom error response to the client
        } else {
          res.send(response.data);
        }
      })
      .catch((error) => {
        console.log('ERROR IN OMDb API GET', error);
        res.status(500).send({ error: 'Internal server error' }); // send a custom error response to the client
      });
  });

module.exports = router;