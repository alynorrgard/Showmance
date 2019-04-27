const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('show', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://pngimage.net/wp-content/uploads/2018/06/gray-square-png-6.png',
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  seasons: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  viewingMethod: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});
