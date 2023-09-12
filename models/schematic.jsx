const mongoose = require('mongoose');
require('./user');


const schematicSchema = require('./SchematicSchema')
module.exports = mongoose.model('Schematic', schematicSchema);