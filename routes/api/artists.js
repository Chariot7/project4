const express = require('express');
const router = express.Router();
const artistsCtrl = require('../../controllers/api/artists')

router.get('/', artistsCtrl.index);
router.post('/', artistsCtrl.create);
router.delete('/:id', artistsCtrl.delete);
router.put('/:id', artistsCtrl.update);

module.exports = router;