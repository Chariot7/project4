const Wall = require('../../models/wall')

module.exports = {
    index,
    create,
    update,
    delete: deleteOne
}

async function index(req, res) {
    const walls = await Wall.find({});
    res.status(200).json(walls);
}

async function create(req, res) {
    const createdWall = await Wall.create(req.body)
    res.status(200).json(createdWall)
}

async function update(req, res) {
    const updatedWall = await Wall.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedWall)
}

async function deleteOne(req, res) {
    const deletedWall = await Wall.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedWall);
}