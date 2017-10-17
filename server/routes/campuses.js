
const express = require('express');
const router = new express.Router();
module.exports = router;   // this is key ****
const models = require('../../db/models')
const Campus = models.Campus
const Student = models.Student


// return all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
})


// return a single campus by i



// PENDING find all students who belongs to a campus
// full route - - localhost:1337/api/campuses/<id>
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId, {include: [Student]})
  .then(campus => {
    // console.log(campus[0].students)
    res.json(campus)
  })

})


//  delte a campus
