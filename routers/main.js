let express = require('express');
let router = express.Router();

let mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.main);
router.get('/creditos', mainControllers.creditos);

module.exports = router;

