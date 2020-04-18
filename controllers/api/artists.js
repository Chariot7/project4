const Artist = require('../../models/artist')
const Artwork = require('../../models/artwork')

module.exports = {
    add: addToCreatedBy,
    create,
    addToCreatedBy,
    delete: deleteOne,
    update,
    index
};

// function addToCreatedBy(req, res) {
//     Artwork.findById(req.params.id, function(err, movie) {
//         artwork.createdBy.push(req.body.artistId);
//         artwork.save(function(err) {
//             res.redirect(`/artworks/${artwork._id}`);
//         });
//     });
// }

async function index(req, res) {
    const allArtist = await Artist.find({});
    res.status(200),json(allArtist)
}

async function addToCreatedBy(req, res) {
    const addArtist = await Artwork.findByIdAndUpdate(req.params.id);
    res.status(200).json(addArtist)
}

async function create(req, res) {
    const artist = await Artist.create(req.body);
    res.status(201).json(artist)
}

async function deleteOne(req, res) {
    const deletedArtist = await Artist.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedArtist);
}

async function update(req, res) {
    const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedArtist)
}