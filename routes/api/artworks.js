const express = require('express');
const router = express.Router();
const artworksCtrl = require('../../controllers/api/artworks')

router.get('/', artworksCtrl.index);
router.post('/', artworksCtrl.create);
router.delete('/:id', artworksCtrl.delete);
router.put('/:id', artworksCtrl.update);

module.exports = router;