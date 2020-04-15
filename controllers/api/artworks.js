// const Artist = require('../../models/artist')
const Artwork = require('../../models/artwork')
const User = require('../../models/user')

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
    console.log('this is create')
    console.log(req.body.user)
    const user = await User.findById(req.body.user._id)
  const artwork = await Artwork.create(req.body);
  user.artworks.push(artwork)
  user.save()
  console.log(user)
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