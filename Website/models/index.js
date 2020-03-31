'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
//var sqlite3 = require('sqlite3').verbose()



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  const fs = require('fs')

const path = './database.sqlite3'

try {
  if (fs.existsSync(path)) {
    console.log('file exists');
  } else {
    console.log('nope');
  }
} catch(err) {
  console.error(err)
}
  //sequelize = new Sequelize(config);
  sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: "./database.sqlite3",
    dialectOptions: {
      // Your sqlite3 options here
    }
  });
  console.log(env);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
