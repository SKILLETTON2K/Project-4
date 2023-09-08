const Schematic = require('../models/Schematic');

exports.createSchematic = async (req, res) => {
  try {
    const { title, description, blocks } = req.body;
    const previewPhoto = req.file.buffer; // Store the buffer data

    const schematic = new Schematic({
      title,
      description,
      blocks,
      previewPhoto,
    });

    await schematic.save();

    res.status(201).json({ message: 'Schematic post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};