const Artwork = require('../../models/artwork')
const Artist = require('../../models/artist')

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
}

async function index(req, res) {
    console.log('index function')
    const artworks = await Artwork.find({});
    console.log(artworks)
    res.status(200).json(artworks);
}


async function create(req, res) {
    console.log('create function')
    console.log(req.body)
  const artwork = await Artwork.create(req.body);
  console.log('after')
  console.log(artwork)
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