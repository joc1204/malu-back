
module.exports = (sequelize, DataTypes) => {

    const Articulos = sequelize.define('Articulos', {
        art_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        codigo: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        descripcion: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        costo: {
            type: DataTypes.DECIMAL
        },
        venta: {
            type: DataTypes.DECIMAL
        },
        un_med: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        stockud: {
            type: DataTypes.INTEGER
        },
        stockpeso: {
            type: DataTypes.DECIMAL
        },
        rubro_id: {
            type: DataTypes.INTEGER,
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL'
        },
        marca_id: {
            type: DataTypes.INTEGER,
            onUpdate: 'SET NULL',
            onDelete: 'SET NULL'

        },
        publicado: {
            type: DataTypes.BOOLEAN
        }

    }, { timestamps: false });

    Articulos.associate = (models) => {
        Articulos.belongsTo(models.Rubros, {
            foreignKey: 'rubro_id',
            as: 'rubros'
        });

        Articulos.belongsTo(models.Marcas, {
            foreignKey: 'marca_id',
            as: 'marcas'
        });

    };
    return Articulos;
}