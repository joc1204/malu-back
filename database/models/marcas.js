module.exports = (sequelize,DataTypes) => {

    const Marcas = sequelize.define('Marcas',{
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

    Marcas.associate = (models) => {
        Marcas.hasMany(models.Articulos,{
            foreignKey:'marca_id',
            as:'articulos'
        });
    };
    return Marcas;
}