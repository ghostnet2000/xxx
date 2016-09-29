var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/media', db.getAllMedia);
<<<<<<< HEAD
router.get('/api/medias/:id', db.getSingleMedia);
=======
router.get('/api/media/:id', db.getSingleMedia);
>>>>>>> 9adc60808111056b6f42ace7dc9b18e49499938a
router.post('/api/media', db.createMedia);
router.put('/api/media/:id', db.updateMedia);
router.delete('/api/media/:id', db.removeMedia);


module.exports = router;