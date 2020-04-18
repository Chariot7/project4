const express = require('express');
const router = express.Router();
const wallsCtrl = require('../../controllers/api/wall')

router.get('/', wallsCtrl.index);
router.delete('/:id', wallsCtrl.delete);
router.put('/:id', wallsCtrl.update)

router.use(require('../../config/auth'))
router.post('/', checkAuth, wallsCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;