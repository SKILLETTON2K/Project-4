const Schematic = require('../../models/schematic');

module.exports = {
  index,
  show,
  create,
  edit: editSchematic,
  update: updateSchematic,
  delete: deleteSchematic,
  categoryIndex,
  categoryShow
};

async function index(req, res) {
  const schematics = await Schematic.find({});
  res.json(schematics);
}

async function show(req, res) {
  const schematic = await Schematic.findById(req.params.id);
  res.json(schematic);
}

async function categoryIndex(req, res) {
  const categories = await Schematic.categories.find({});
  res.json(categories);
}

async function categoryShow(req, res) {
  const category = await Schematic.categories.findById(req.params.id);
  res.json(category);
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
  }
  try {
      const schematic = await Schematic.create(req.body);
      res.json(schematic);
  } catch (err) {
      res.status(500).json(err)
  }
}

async function editSchematic(req, res) {
  const schematic = await Schematic.findById({ _id: req.params.id, user: req.user._id });
  res.json(schematic);
}

async function updateSchematic(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
  }
  try {
      const schematic = await Schematic.findByIdAndUpdate(req.params.id, req.body);
      res.json(schematic);
  } catch (err) {
      res.status(500).json(err)
  }
}
async function deleteSchematic(req, res) {
  const schematic = await Schematic.deleteOne({ _id: req.params.id, user: req.user._id });
  res.json(schematic);
}