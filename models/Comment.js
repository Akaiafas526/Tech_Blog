const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    // With relationship defined in index.js, primary key (id) will be created automatically at runtime
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // postId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // }
    // With relationship defined in index.js, foreign keys will be automatically created at runtime
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Comment;
