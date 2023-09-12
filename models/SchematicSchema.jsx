const Schema = require('mongoose').Schema;

const schematicSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  blocks: { type: String, required: true },
  file: {type: File},
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});

module.exports = schematicSchema;