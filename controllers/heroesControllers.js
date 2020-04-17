let arrayHeroes = require('../heroesJS');

 let heroes = {
     heroes: (req,res) => res.send(arrayHeroes),
     detalle: (req,res) => {
         if (Number(req.params.id) > 10 || Number(req.params.id) <= 0){ 
         res.send('No coincide con ningun heroe');
         }else{
         res.send(`Hola, mi nombre es ${arrayHeroes[Number(req.params.id)-1].nombre} y soy ${arrayHeroes[Number(req.params.id)-1].profesion}`);        
         }
     },
     bio: (req,res) => {
        if (Number(req.params.id) > 10 || Number(req.params.id) <= 0){ 
            res.send('No coincide con ningun heroe');
        }else if (req.params.ok == undefined){
            res.send(`Hola, mi nombre es: ${arrayHeroes[Number(req.params.id)-1].nombre} y lamento que no quieras saber mas de mi :(`);
        }else{
         res.send(`Hola, mi nombre es: ${arrayHeroes[Number(req.params.id)-1].nombre} y mi resena es: ${arrayHeroes[Number(req.params.id)-1].resenia} `)   
        }
     }
 };

module.exports = heroes;



const found = arrayHeroes.find(elemento => elemento.id == "10");
console.log(found);