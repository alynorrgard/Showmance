const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('tag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  similar: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});
