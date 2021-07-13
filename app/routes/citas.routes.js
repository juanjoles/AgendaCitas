//module.exports = app => {
    const citas = require ("../controllers/citas.controllers.js");
    var router = require("express").Router();
    

  
router.get('/', (req, res) => {  
    res.render('citas');
});

    router.get('/crear', (req, res) => {
        res.render('crear');
    });
    //CREAR CITA
    router.post('/citas', citas.create);

    //SELECCIONAR CITas
    router.get('/citas', citas.select); 
   
    //SELECCION POR CONDICIONES
    router.get('/fecha',citas.findAllFecha); 

    router.get('/fecha1',(req,res) =>{
        res.render('fecha');
    });

    router.post('/eliminar/:id', citas.delete);

    //app.use('/api/citas', router);

    module.exports = router;
