// // // // // // const { Model, DataTypes } = require("sequelize");
// // // // // // const sequelize = require("../config/connection");

// // // // // // class Purchased extends Model {}

// // // // // // Purchased.init(
// // // // // //   {
// // // // // //     id: {
// // // // // //       type: DataTypes.INTEGER,
// // // // // //       allowNull: false,
// // // // // //       primaryKey: true,
// // // // // //       autoIncrement: true,
// // // // // //     },
// // // // // //     seller_username: {
// // // // // //       type: DataTypes.STRING,
// // // // // //       allowNull: false,
// // // // // //       references: {
// // // // // //         model: "post",
// // // // // //         key: "seller_username",
// // // // // //       },
// // // // // //     },
// // // // // //     buyer_username: {
// // // // // //       type: DataTypes.STRING,
// // // // // //       allowNull: false,
// // // // // //       references: {
// // // // // //           model: 'user',
// // // // // //           key: 'username'
// // // // // //       }
// // // // // //     },
// // // // // //     post_id: {
// // // // // //       type: DataTypes.INTEGER,
// // // // // //       allowNull: false,
// // // // // //       as: "item_id",
// // // // // //       references: {
// // // // // //         model: "post",
// // // // // //         key: "id",
// // // // // //       },
// // // // // //     },
// // // // // //   },
// // // // // //   {
// // // // // //     sequelize,
// // // // // //     freezeTableName: true,
// // // // // //     underscored: true,
// // // // // //     modelName: "Purchased",
// // // // // //   }
// // // // // // );

// // // // // // module.exports = Purchased;
