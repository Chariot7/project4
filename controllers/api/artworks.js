const Artist = require('../../models/artist')
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
    console.log(req.user)
    let artistInfo = {name: req.body.name}
    const artist = await Artist.create(artistInfo)
    console.log(artist, 'this is artist')
    let artInfo = {
        title: req.body.title,
        year: req.body.year,
        signature: req.body.signature,
        user: req.user._id,
        artist: artist._id
    }
    console.log(req.body)
    const artwork = await Artwork.create(artInfo);
    artistAndArtwork = {
        artist,
        artwork
    }
    res.status(201).json(artistAndArtwork)
}

async function deleteOne(req, res) {
    const deletedArtwork = await Artwork.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedArtwork);
}

async function update(req, res) {
    const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedArtwork)
}