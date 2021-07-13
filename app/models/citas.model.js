module.exports = (sequelize, Sequelize) => {
    const Citas = sequelize.define("citas", {
        nombre:{
            type:Sequelize.STRING
        },
        apellido:{
            type:Sequelize.STRING
        },
        fecha:{
            type:Sequelize.DATEONLY
        },
        hora:{
            type:Sequelize.TIME
        }
});

return Citas;
}
