var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/media', db.getAllMedia);
router.get('/api/media/:id', db.getSingleMedia);
router.post('/api/media', db.createMedia);
router.put('/api/media/:id', db.updateMedia);
router.delete('/api/media/:id', db.removeMedia);


module.exports = router;