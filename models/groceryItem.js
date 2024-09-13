const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class GroceryItem extends Model {}

GroceryItem.init(
  {
    iditems: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "groceryitems",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = GroceryItem;
