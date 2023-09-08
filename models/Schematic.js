const mongoose = require('mongoose');

const schematicSchema = new mongoose.Schema({
  title: String,
  description: String,
  blocks: Number,
  previewPhoto: Buffer, // Storing the file as a buffer
});

const Schematic = mongoose.model('Schematic', schematicSchema);

module.exports = Schematic;