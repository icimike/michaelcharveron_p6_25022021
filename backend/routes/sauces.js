const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/sauces');

const router = express.Router();

router.get('/', auth, stuffCtrl.getAllSauces);
router.post('/', auth, multer, stuffCtrl.createSauces);
router.get('/:id', auth, stuffCtrl.getOneSauces);
router.put('/:id', auth, multer, stuffCtrl.modifySauces);
router.delete('/:id', auth, stuffCtrl.deleteSauces);
router.post('/:id/like', auth, stuffCtrl.likeSauces);

module.exports = router;