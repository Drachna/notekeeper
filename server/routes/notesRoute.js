const router=require('express').Router()
const requireAuthentication =require('../middlewares/authMiddleware')
const notesController=require('../controllers/notesController')

router.post('/api/note',requireAuthentication,notesController.addNotes)
router.post('/api/note/edit',requireAuthentication,notesController.updateNotes)
router.get('/api/get_note',requireAuthentication,notesController.findNotes)
router.delete('/api/deleteNote/:id',requireAuthentication,notesController.deleteNote);

module.exports=router