let express = require('express');
let router = express.Router();

let heroesControllers = require('../controllers/heroesControllers');

router.get('/', heroesControllers.heroes);
router.get('/detalle/:id', heroesControllers.detalle);
router.get('/bio/:id/:ok?', heroesControllers.bio);

module.exports = router;