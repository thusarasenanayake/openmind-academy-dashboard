const router = require('express').Router();
const studentController = require('../controllers/studentController');
const { requireAuth, checkUser } = require('../middlewares/authMiddleware');

router.get('*', checkUser, requireAuth);
router.post('*', requireAuth);
router.delete('*', requireAuth);

router.get('/', studentController.student_index);
router.get('/create', studentController.student_create_get);
router.post('/create', studentController.student_create_post);
router.post('/:id/edit', studentController.student_edit_post);
router.delete('/:id', studentController.student_delete);
router.get('/:id/edit', studentController.student_edit_get);
router.get('/:id', studentController.student_details);

module.exports = router;
