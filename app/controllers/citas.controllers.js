const db = require ("../models");
const Cita = db.citas;
const Op = db.Sequelize.Op;

//CREAR

exports.create = (req,res) => {
    
    const citas = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha,
        hora: req.body.hora
    };
    
    Cita.create(citas)
        .then(data =>{
            //res.send(data);
            res.redirect("citas");
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "error"
            });
        });
};

//SELECCIONAR TODOS

exports.select = (req,res) => {
     Cita.findAll()
        .then(data =>{
            res.render("citas",{
                arraycitas:data
            });
            //res.send({arraycitas:data});
        
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "ERROR SELECT"
            });
        });
        
};

//SELECCIONAR CON CONDICION

exports.findAllFecha = (req,res) => {
    const fecha = req.query.fecha;
    let condicion =  { fecha: `${fecha}`};

    Cita.findAll({where:condicion})
    .then(data =>{
        res.render("citas",{
            arraycitas:data
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "ERROR SELECT FECHA"
        });
    });
}

exports.delete = (req,res) => {
    const id = req.params.id

    console.log(id)
    Cita.destroy({
        where:{
            id:id
        }
    })
     res.redirect('/citas/citas');
           
     
}
