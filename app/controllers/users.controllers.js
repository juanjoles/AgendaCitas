

const db = require ("../models");
const user = db.user;
const Op = db.Sequelize.Op;







exports.create = (req,res) => {
    
    const users = {
        username:req.body.username,
        password:req.body.password
    };
    
    user.create(users)
        .then(data =>{
            //res.send(data);
            res.render('login',{
                alert: true,
                alertTitle: "Registration",
                alertMessage: "Registracion Exitosa",
                alertIcon:'success',     
                ruta: ''  
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "error"
            });
        });
};

exports.select =  (req,res) => {

    const username = req.body.username;
    const password = req.body.password;
    const condicion =   { username: `${username}`} ;
    
    if(username && password){
    user.findAll({where:condicion})
    .then(function(results){
        
        if(results.length == 0){
            
             res.render('login',{
                alert: true,
                alertTitle: "Error",
                alertMessage: "USUARIO y/o PASSWORD incorrectas",
                alertIcon:'error',     
                ruta: '/'    
             })
             
             
        }else{
             
             
             res.render('home');
        }
    })
    
}else{
    res.render('login',{
        alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese usuario y contraseña",
                alertIcon:'warning',     
                ruta: '/'   
    })
}
    
}
