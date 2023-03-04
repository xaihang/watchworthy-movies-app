const express = require('express');
const router = express.Router();
const axios = require('axios');

// 	Parameter type is 't' = Movie title to search for.
router.get('/:t', (req,res) => {
    const searchTerms  = req.params.t;
    console.log('/search GET', searchTerms);
    axios.get(`http://www.omdbapi.com/?t=${searchTerms}&apikey=${process.env.OMDb_API_KEY}`
    )
    .then ((response) => {
        console.log('response', response );
        // console.log('response.data', response.data );
        res.send(response.data);
    })
    .catch((error) => {
        console.log('ERROR IN OMDB API GET', error); 
    });
})

module.exports = router;