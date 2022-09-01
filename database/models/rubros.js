
module.exports = (sequelize,DataTypes) => {

    const Rubros = sequelize.define('Rubros',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    },{timestamps:false});

    Rubros.associate = (models) => {
        Rubros.hasMany(models.Articulos,{
            foreignKey:'rubro_id',
            as:'articulos'
        });
    };
    return Rubros;
}