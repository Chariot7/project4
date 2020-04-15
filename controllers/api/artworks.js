// const Artist = require('../../models/artist')
const Artwork = require('../../models/artwork')

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
}

async function index(req, res) {
    const artworks = await Artwork.find({});
    res.status(200).json(artworks);
}


async function create(req, res) {
  const artwork = await Artwork.create(req.body);
  res.status(201).json(artwork)
}

async function deleteOne(req, res) {
    const deletedArtwork = await Artwork.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedArtwork);
}

async function update(req, res) {
    const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedArtwork)
}