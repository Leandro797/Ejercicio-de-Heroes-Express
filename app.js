let express = require('express');
let app = express();

let rutasHeroes = require('./routers/heroes');
let rutasMain = require('./routers/main');

app.listen(3030, () => console.log('Todo Ok'));

 app.use('/', rutasMain); 
 app.use('/heroes', rutasHeroes);

