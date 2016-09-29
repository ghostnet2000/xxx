var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
<<<<<<< HEAD
var connectionString = 'postgres://postgres:postgres@localhost:5432/datahub';
var db = pgp(connectionString);

function getAllMedia(req, res, next) {
  db.any('select * from ogrgeojson')
=======
var connectionString = 'postgres://postgres:postgres@localhost/datahub';
var db = pgp(connectionString);

function getAllMedia(req, res, next) {
  db.any('select * from pups')
>>>>>>> 9adc60808111056b6f42ace7dc9b18e49499938a
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL media'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleMedia(req, res, next) {
<<<<<<< HEAD
  var pupID = parseStr(req.params.id);
  db.one('select * from ogrgeojson where ogc_fid = $1', pupID)
=======
  var pupID = parseInt(req.params.id);
  db.one('select * from pups where id = $1', pupID)
>>>>>>> 9adc60808111056b6f42ace7dc9b18e49499938a
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE media'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createMedia(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into pups(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one media'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateMedia(req, res, next) {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated media'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeMedia(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.result('delete from pups where id = $1', pupID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} media`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAllMedia: getAllMedia,
  getSingleMedia: getSingleMedia,
  createMedia: createMedia,
  updateMedia: updateMedia,
<<<<<<< HEAD
  removeMedia: removeMedia
=======
  removeMedia: removePuppy
>>>>>>> 9adc60808111056b6f42ace7dc9b18e49499938a
};
