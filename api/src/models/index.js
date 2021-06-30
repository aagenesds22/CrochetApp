const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const modelDefiners = {};

// Se leen los archivos de la carpeta models, se los convierte en un objeto, para poder importarlos en 
//conjunto y por destructuring también
fs.readdirSync('./src/models')
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const upperCaseFirst = file.split('.')[0][0].toUpperCase() + file.substring(1, file.lastIndexOf('.'))
    modelDefiners[upperCaseFirst] = require('./'+file)[upperCaseFirst]
    /* modelDefiners.push(require('./'+ file)); */
  });

/* const compiledModels = Object.fromEntries(modelDefiners); */
console.log(modelDefiners)
/* console.log(compiledModels); */

module.exports = modelDefiners;