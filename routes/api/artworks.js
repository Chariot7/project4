const express = require('express');
const router = express.Router();
const artworksCtrl = require('../../controllers/api/artworks')

router.get('/', artworksCtrl.index);

router.use(require('../../config/auth'))
router.delete('/:id', checkAuth, artworksCtrl.delete);
router.put('/:id',checkAuth, artworksCtrl.update);
router.post('/', checkAuth, artworksCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;